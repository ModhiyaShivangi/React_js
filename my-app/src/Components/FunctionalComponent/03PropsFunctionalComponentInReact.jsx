import React, { useEffect, useState } from 'react';
import CustomCard from './04CustomCard';


function PropsFunctionalComponentInReact() {

const [data, setaData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((resp) =>{
                setaData(resp)
            })
        })
    },[])
   
    let ProductListData = data.map((val) => {
        return <div className="col-3">
            <CustomCard title={val.title} image={val.image} />
            </div>
    })
    return (
        <>
        <div className="container">
            <h2>Q.- What is <b>Props</b> in Function Component?</h2>
            <p><b>Props (short for properties) are used to pass data from a parent
                component to a child component. Props are read-only and cannot be
                modified by the child component. They are passed as attributes to the
                child component in JSX.
                </b></p>
            <div className="row">
                {ProductListData}
            </div>
            </div>
        </>
    );
};


export default PropsFunctionalComponentInReact;