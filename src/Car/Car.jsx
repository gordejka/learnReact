import React from "react";
//import Radium from "radium";
import "./Car.scss";

class Car extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Car componentWillReceiveProps", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Car shouldComponentUpdate", nextProps, nextState);
        return nextProps.name.trim() !== this.props.name.trim() ;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Car componentWillUpdate", nextProps, nextState);
    }
    componentDidUpdate() {
        console.log("Car componentDidUpdate");
    }

    render() {
        console.log("Car render");
        const inputClasses = ["input"];
        if (this.props.name !== "") {
            inputClasses.push("green");
        } else {
            inputClasses.push("red");
        }
        if (this.props.name.length > 4) {
            inputClasses.push("bold");
        }

        const style = {
            border: "1px solid #ccc",
            boxShadow: "0 4px 5xp 0 rgba(0,0,0,.14)",
            ":hover": {
                border: "1px solid #aaa",
                boxShadow: "0 4px 5xp 0 rgba(0,0,0,.25)",
                cursor: "pointer"
            }
        };

        return (
            <div className="car" style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>
                    Year: <strong>{this.props.year}</strong>
                </p>
                <input
                    className={inputClasses.join(" ")}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
}

export default Car;
