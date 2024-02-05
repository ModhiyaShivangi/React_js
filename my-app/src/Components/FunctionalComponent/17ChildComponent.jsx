import React, { useState } from 'react';

const ChildComponent = (props) => {
    const [name, setName] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        props.getData(name)
    }
    return (
        <>

        <div className="container">

            <form onSubmit={handleSubmit}>
            <input type="text" value={name} 
            onChange={(e) => {setName(e.target.value)}}/>
            <button>submit</button>
            </form>
        </div>
        </>
    );
};

export default ChildComponent;
