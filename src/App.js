import React, {Component} from 'react';
import NavBar from './Components/NavBar.js';
import './App.css';
import gpu from './gpuList.js';
import ProductList from './Components/ProductList.js';
import SearchBox from './Components/SearchBox.js'
import FilterBar from './Components/FilterBar.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            brands: [],
            priceMin: 0,
            priceMax: +Infinity,
            vram: [],
            clock: [],
            cart: []
        }
    }


    onClockFilterChange = (newClock, checked) => {
        if (checked) {
            this.setState({
                clock: this.state.clock.concat(newClock),
            })
        } else {
            this.setState({
                clock: this.state.clock.filter(clock => {
                    return clock.min !== newClock.min;
                })
            })
        }
    }

    onVramFilterChange = (newVram, checked) => {
        (checked) ?
            this.setState({vram: this.state.vram.concat(newVram)}) :
            this.setState({
                vram: this.state.vram.filter(e => {
                    return e !== newVram
                })
            })
    }

    onPriceMinFilterChange = (event) => {
        this.setState({priceMin: event.target.value})
    }

    onPriceMaxFilterChange = (event) => {
        this.setState({priceMax: event.target.value})
    }

    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    onBrandFilterChange = (newBrand, checked) => {
        (checked) ?
            this.setState({brands: this.state.brands.concat(newBrand)}) :
            this.setState({
                brands: this.state.brands.filter(e => {
                    return e !== newBrand
                })
            })

    }

    onCartChange = (gpuID) => {
        this.setState({cart: this.state.cart.concat(gpu.filter(product => {return product.id === gpuID}))});
    }

    removeProductFromCart = (CartproductID) => {
        this.setState({cart: this.state.cart.filter((product,index) => {return CartproductID !== index})})
    }

    filter = (gpus) => {
        const hasClock = (gpu) => this.state.clock.length === 0 || this.state.clock.some(clock => {
            return gpu.clock >= clock.min && gpu.clock <= clock.max;
        })

        const hasVram = (gpu) => (this.state.vram.length === 0 ? true : this.state.vram.includes(gpu.vram))

        const hasPrice = (gpu) => (gpu.price >= this.state.priceMin &&
            (gpu.price <= this.state.priceMax || this.state.priceMax === ''))

        const hasBrand = (gpu) => (this.state.brands.length === 0 ?
            true : this.state.brands.includes(gpu.brand));

        const hasText = (gpu) => gpu.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

        const predicates = [
            hasClock,
            hasVram,
            hasPrice,
            hasBrand,
            hasText
        ];

        return gpus.filter(gpu => predicates.every(predicate => predicate(gpu)));
    }

    render() {
        const gpus = this.filter(gpu);
        console.log(this.state.cart)

        return (
            <div>

                <NavBar cartAddedProducts={this.state.cart}
                        removeFromCart={this.removeProductFromCart}/>
                <SearchBox Search={this.onSearch}/>

                <div className='filter-product-wrap'>
                    <FilterBar
                        onBrandCheckboxToggle={this.onBrandFilterChange}
                        onPriceMinValueChange={this.onPriceMinFilterChange}
                        onPriceMaxValueChange={this.onPriceMaxFilterChange}
                        onVramCheckboxToggle={this.onVramFilterChange}
                        onClockCheckboxToggle={this.onClockFilterChange}
                    />
                    <ProductList 
                        gpuList={gpus}
                        onCartClick={this.onCartChange}/>
                </div>
            </div>
        );
    }
}

export default App;
