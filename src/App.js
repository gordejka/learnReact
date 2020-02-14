import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
    state = {
        cars: [
            { name: "Ford", year: 2018 },
            { name: "Bmw", year: 2016 },
            { name: "Audi", year: 2012 }
        ],
        pageTitle: "React components",
        showCars: false
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    changeTitleHandler = pageTitle => {
        this.setState({ pageTitle });
    };

    render() {
        console.log("render");

        let cars = null;
        if (this.state.showCars){
          cars = this.state.cars.map((car, index) => {
            return (
                <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeTitle={this.changeTitleHandler.bind(
                        this,
                        car.name
                    )}
                />
            );
        })
        }

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler.bind(this, "Changed!")}>
                    Toggle cars
                </button>

                { cars }
            </div>
        );
    }
}

export default App;
