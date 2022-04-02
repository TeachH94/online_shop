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
            clock: []
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

    getVram = (event) => {
        const ramSize = event.target.getAttribute('data-vram');
        (event.target.checked) ?
            this.setState({vram: this.state.vram.concat(ramSize)}) :
            this.setState({
                vram: this.state.vram.filter(e => {
                    return e !== ramSize
                })
            })
    }

    getPriceMin = (event) => {
        this.setState({priceMin: event.target.value})
    }

    getPriceMax = (event) => {
        this.setState({priceMax: event.target.value})
    }

    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    AmdCheckBox = (event) => {
        (event.target.checked) ?
            this.setState({brands: this.state.brands.concat(['AMD'])}) :
            this.setState({
                brands: this.state.brands.filter(e => {
                    return e !== 'AMD'
                })
            })

    }

    GeforceCheckBox = (event) => {
        (event.target.checked) ?
            this.setState({brands: this.state.brands.concat('Geforce')}) :
            this.setState({
                brands: this.state.brands.filter(e => {
                    return e !== 'Geforce'
                })
            })
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

        return (
            <div>
                <NavBar/>
                <SearchBox Search={this.onSearch}/>
                <div className='filter-product-wrap'>
                    <FilterBar
                        AmdCheckBox={this.AmdCheckBox}
                        GeforceCheckBox={this.GeforceCheckBox}
                        getPriceMin={this.getPriceMin}
                        getPriceMax={this.getPriceMax}
                        getVram={this.getVram}
                        onCheckboxToggle={this.onClockFilterChange}
                    />
                    <ProductList gpuList={gpus}/>
                </div>
            </div>
        );
    }
}

export default App;
