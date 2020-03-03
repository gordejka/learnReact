import React from "react";
import "./App.scss";
import Car from "./Car/Car";
import ErrorBoundary from './errorBoundary/errorBoundary'
import Counter from "./Counter/Counter";
import Counter3 from "./Counter3/Counter3";


export const ClickedContext = React.createContext(false);


class App extends React.Component {
    constructor(props) {
        //console.log('App constructor');
        super(props);
        this.state = {
            clicked:false,
            cars: [
                { name: "Ford", year: 2018 },
                { name: "Bmw", year: '2016' },
                { name: "Audi", year: 2012 }
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
                    <ErrorBoundary key={index} >
                        <Car
                            name={car.name}
                            year={car.year}
                            onDelete={this.deleteHendler.bind(this, index)}
                            onChangeName={event =>
                                this.onChangeName(event.target.value, index)
                            }
                        />
                    </ErrorBoundary>
                );
            });
        }

        return (
            <div className="App">
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter/>
                </ClickedContext.Provider>
                
                <Counter3 name="counter_new_3"/>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler.bind(this, "Changed!")}>
                    Toggle cars
                </button>
                <button onClick={()=>this.setState({clicked:true})}>Change clicked</button>

                {cars}
            </div>
        );
    }
}

export default App;
