import React, { useState } from 'react'


const CustomHook = (initState,initError) => {
    console.log("CustomHook");

    const [inp, setInp] = useState(initState);
    const [errors, setError] = useState(initError);

    const HandleChange = (e) => {
        console.log("inside handlechange");
        let spanId =[e.target.name] + "error";
        if (e.target.value == '') {
            setError ({...errors, [spanId]: "this field is required"})
            
        } else {
            setInp((inp) => ({...inp, [e.target.name]: e.target.value}))
            
        }
    }

  return {HandleChange, inp, errors, setInp}
}

export default CustomHook