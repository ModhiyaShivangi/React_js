import React, { useContext } from 'react'
import {data,data1,data2,data3} from './19UseContextHook'

function ChildC() {


    const name = useContext(data);
    const surname = useContext(data1);
    const gender = useContext(data2);
    const age = useContext(data3);

    return (
        <>
            <h1>Hi my name is {name} {surname} and my gender is 
            {gender} and age is {age}</h1>
     
        </>
  )
}

export default ChildC