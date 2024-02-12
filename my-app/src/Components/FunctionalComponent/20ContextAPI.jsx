import React, { createContext } from 'react'
import Child1 from "./Child1"

const data = createContext();
const data1 = createContext();
const data2 = createContext();

function ContextAPI() {

  const name = "shivangi"
  const surname = "Modhiya"
  const gender = "female"

  return (

    <>
       <div className="container">
    <data.Provider value={name}>
    <data1.Provider value={surname}>
    <data2.Provider value={gender}>
        <Child1/>
    </data2.Provider>
    </data1.Provider>
    </data.Provider>
    </div>
    </>
  )
}

export default ContextAPI
export {data,data1,data2}