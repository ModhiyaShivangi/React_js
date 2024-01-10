import React from 'react';
import { useState } from 'react';

const  UseStateinfuncomponent = () => {
    const [count, setcount] = useState(15)
    // update =()=>{
    //     console.log("update");
    // }
    function update(){
        console.log("update");
        setcount(count + 1)
    }
    return (  
        <>
        <div className="container">
    <h2>Q.- What is the useState() Hook used for?</h2>
    <p><b>The useState() Hook is a built-in Hook in React that allows functional
        components to manage local state. </b></p>
        <p><b>It returns an array with two elements:</b>
        the current state value and a function to update the state. It replaces the
        need for using a class and this.setState() to manage state.</p>
    

        <h1>Shivangi</h1>
        <h2>{count}</h2>
        <button onClick={update}>update</button>

        </div>
        </>
    );
}
 
export default  UseStateinfuncomponent;

