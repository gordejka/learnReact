import React, { Component } from "react";
import "./Car.css";

export default props => {
    const inputClasses = ["input"];
    if(props.name !== ''){
        inputClasses.push('green');
    }else{
        inputClasses.push('red');
    }
    if(props.name.length > 4){
        inputClasses.push('bold');
    }
    return (
        <div className="car">
            <h3>Car name: {props.name}</h3>
            <p>
                Year: <strong>{props.year}</strong>
            </p>
            <input
                className={inputClasses.join(" ")}
                type="text"
                onChange={props.onChangeName}
                value={props.name}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
};
