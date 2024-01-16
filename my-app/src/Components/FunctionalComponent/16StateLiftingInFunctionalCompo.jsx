import React, { useState } from 'react';
import ChildComponent from './17ChildComponent.jsx';

const StateLiftingInFunctionalCompo = () => {
    const [statedata, setStatedata] = useState();
    const parentFunc = (data) => {
        setStatedata(data)
    }
    return (
        <>
        <div className="container">

            <p>Parent State : {statedata}</p>
            {/* <button>Click Parent</button> */}
            <ChildComponent func={parentFunc} />
            </div>
        </>
    );
};

export default StateLiftingInFunctionalCompo;