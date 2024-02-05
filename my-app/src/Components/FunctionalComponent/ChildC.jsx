import React, { useContext } from 'react'
import {data,data1,data2} from './19UseContextHook'

function ChildC() {

    const name = useContext(data);
    const surname = useContext(data1);
    const gender = useContext(data2);

    return (
        <>
            <h1>Hi my name is {name} {surname} and and my gender is {gender}</h1>
        </>
  )
}

export default ChildC