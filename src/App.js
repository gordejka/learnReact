import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component{
  render(){
    const styles = {
      fontSize:'50px'
    }
    return (
      <div>
        <h1 style={styles}>hello world</h1>
        <Car name={'Ford'} year={2019}>
          <p>123</p>
        </Car>
        <Car name={'Bmw'} year={2016}/>
      </div>
    );
  }
}

export default App;
