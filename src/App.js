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
      priceMin : 0,
      priceMax: +Infinity,
      vram: [],
      clockMin: [],
      clockMax: []
    }
  }


getClock = (event) => {
  const newClockMin = event.target.getAttribute('data-clock-min');
  const newClockMax = event.target.getAttribute('data-clock-max');

  if (event.target.checked) {
    this.setState({
      clockMin : this.state.clockMin.concat(newClockMin),
      clockMax : this.state.clockMax.concat(newClockMax)
    })
  } 
  
  else {
    this.setState({
      clockMin : this.state.clockMin.filter(e => {return e !== newClockMin}),
      clockMax : this.state.clockMax.filter(e => {return e !== newClockMax})
    })
  }          
}
  
getVram = (event) => {
  const ramSize = event.target.getAttribute('data-vram');
  (event.target.checked) ?
    this.setState({vram : this.state.vram.concat(ramSize)}) :
    this.setState({vram : this.state.vram.filter(e => {return e !== ramSize})})
}  
  
getPriceMin = (event) => {
  this.setState({priceMin : event.target.value})
}

getPriceMax = (event) => {
  this.setState({priceMax : event.target.value})
}  

Search = (event) => {
  this.setState({searchfield: event.target.value})
}

AmdCheckBox = (event) => {
  (event.target.checked) ?
    this.setState({brands : this.state.brands.concat(['AMD']) }) :
    this.setState({brands : this.state.brands.filter(e => {return e !== 'AMD'})})
    
}

GeforceCheckBox = (event) => {
  (event.target.checked) ?
    this.setState({brands: this.state.brands.concat('Geforce')}) :
    this.setState({brands: this.state.brands.filter(e => {return e !== 'Geforce'})})
}



  render() {
    console.log(`render`)

    const filters = gpu.filter(e => {
      let conditions = [];
      for (let i=0; i<this.state.clockMin.length; i++) {
        conditions.push (             
          e.clock >= this.state.clockMin[i] &&
          e.clock <= this.state.clockMax[i]
        )
      }
      return (
        (conditions.includes(true) || this.state.clockMin.length === 0) &&
        
        (this.state.vram.length === 0 ?
        true : this.state.vram.includes(e.vram)) &&

        (e.price >= this.state.priceMin &&
        (e.price <= this.state.priceMax || this.state.priceMax === '')) &&

        (this.state.brands.length === 0 ?
        true : this.state.brands.includes(e.brand)) &&

        e.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
      
    });

    // const filterByClock = gpu.filter(e => {
    //   let conditions = [];
    //   for (let i=0; i<this.state.clockMin.length; i++) {
    //     conditions.push (             
    //       e.clock >= this.state.clockMin[i] &&
    //       e.clock <= this.state.clockMax[i]
    //     )
    //   }
    //   return conditions.includes(true) || this.state.clockMin.length === 0;        
    // })
    
    // const filterByRam = gpu.filter(e => {
    //   return (
    //     this.state.vram.length === 0 ?
    //     true : this.state.vram.includes(e.vram)
    //   )
      
    // })

    // const filterByPrice = gpu.filter(e => {
    //   return (
    //     e.price >= this.state.priceMin &&
    //     (e.price <= this.state.priceMax || this.state.priceMax === '')
    //   )
    // })

    // const filterByName = gpu.filter(e => {
    //   return e.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    // })

     
    // const filterByBrand = gpu.filter(e => {
    //   return (
    //     this.state.brands.length === 0 ?
    //       true : this.state.brands.includes(e.brand)
    //   )
    // })
        

    return (
      <div> 
        <NavBar />
        <SearchBox Search={this.Search}/>
        <div className='filter-product-wrap'>
          <FilterBar
              AmdCheckBox={this.AmdCheckBox} 
              GeforceCheckBox={this.GeforceCheckBox}
              getPriceMin={this.getPriceMin}
              getPriceMax={this.getPriceMax}
              getVram={this.getVram}
              getClock={this.getClock}
              /> 
          <ProductList gpuList = {filters}/>
        </div>
      </div>   
    );
  }  
}

export default App;
