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
        <Car/>
      </div>
    );
  }
}

export default App;
