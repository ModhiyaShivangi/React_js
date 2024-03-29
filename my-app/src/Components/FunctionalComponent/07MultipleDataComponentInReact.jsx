import React, { useState } from 'react';
const ControlledComponentInReact = () => {
    const [formData,setFormData] =useState({})
    const inpChangeEvent = (event)=>{ setFormData({...formData,[event.target.name]:event.target.value}) }
    return (
        <>
         <div className="container">
          Name<input type="text" onChange={inpChangeEvent} name="fname" id="fname" />  <br /> 
          Last Name<input type="text" onChange={inpChangeEvent} name="lname" id="lname" />  <br /> 
         Email <input type="text" onChange={inpChangeEvent} name="email" id="email" />  <br /> 
          Mobile<input type="text" onChange={inpChangeEvent} name="mobile" id="mobile" /><br />   
          <p>{JSON.stringify(formData)}</p>
          </div>
        </>
    );
};

export default ControlledComponentInReact;