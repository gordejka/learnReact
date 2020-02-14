import React from "react";
import "./App.scss";
import Car from "./Car/Car";

class App extends React.Component {
    constructor(props) {
        //console.log('App constructor');
        super(props);
        this.state = {
            cars: [
                { name: "Ford", year: 2018 },
                // { name: "Bmw", year: 2016 },
                // { name: "Audi", year: 2012 }
            ],
            pageTitle: "React components",
            showCars: false
        };
    }
 
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    onChangeName(name, index) {
        //console.log(name, index);
        const car = this.state.cars[index];
        car.name = name;
        //клонирование массива
        //const cars = this.state.cars.concat()
        //клонирование массива
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars
        });
    }

    deleteHendler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        });
    }


    UNSAFE_componentWillMount(){
        console.log('App componentWillMount');
    }
    componentDidMount(){
        console.log('App componentDidMount');
    }
    render() {
        console.log("App render");

        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHendler.bind(this, index)}
                        onChangeName={event =>
                            this.onChangeName(event.target.value, index)
                        }
                    />
                );
            });
        }

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler.bind(this, "Changed!")}>
                    Toggle cars
                </button>
                {cars}
            </div>
        );
    }
}

export default App;
