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
        pageTitle: "React components"
    };

    changeTitleHandler = newTitle => {
        this.setState({
            pageTitle: newTitle
        });
    };

    handleInput = event => {
        console.log("chandged", event.target.value);
        this.setState({
            pageTitle: event.target.value
        });
    };

    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
                <input onChange={this.handleInput} />
                <button
                    onClick={this.changeTitleHandler.bind(this, "Changed!")}
                >
                    Change title
                </button>

                {this.state.cars.map((car, index) => {
                    
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
                })}
            </div>
        );
    }
}

export default App;
