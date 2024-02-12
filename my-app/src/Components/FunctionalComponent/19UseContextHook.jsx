import React, { createContext } from "react"
import ChildA from './ChildA'

const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function UseContextHook() {

    const name = "shivangi"
    const surname = "Modhiya"
    const gender = "Female"
    const age = "21"

  return (
    <>
    <div className="container">
    <data.Provider value={name}>
    <data1.Provider value={surname}>
    <data2.Provider value={gender}>
    <data3.Provider value={age}>
        <ChildA/>
    </data3.Provider>
    </data2.Provider>
    </data1.Provider>
    </data.Provider>
    </div>
    </>
  )
}

export default UseContextHook;
export {data,data1,data2,data3}