import React, { Component } from "react";

// const Car = () =>{
//     return(<h2>This is car Component</h2>);
// }

//const Car = () => <h2>This is car Component</h2>;

export default () => (
    <div>
        <p>This is car Component</p>
        <p>Number: {Math.round(Math.random()*100)}</p>
    </div>
);
