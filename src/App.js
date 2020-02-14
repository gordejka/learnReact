import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
    state = {
      cars: [
        {name:"Ford", year:2018},
        {name:"Bmw", year:2016},
        {name:"Audi", year:2012}
      ],
      pageTitle:'React components'
    };
    render() {
        const styles = {
            fontSize: "50px"
        };
        const cars = this.state.cars;
        return (
            <div>
                <h1 style={styles}>{this.state.pageTitle}</h1>
                <Car name={cars[0].name} year={cars[0].year} />
                <Car name={cars[1].name} year={cars[1].year} />
                <Car name={cars[2].name} year={cars[2].year} />
            </div>
        );
    }
}

export default App;
