import React, { useState } from 'react';

const ChildComponent = (props) => {
    return (
        <>

        <div className="container">
            <input type="text" onChange={(event) => { props.func(event.target.value) }} name="" id="" />
        </div>
        </>
    );
};

export default ChildComponent;