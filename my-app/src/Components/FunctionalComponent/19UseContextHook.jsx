import React, { createContext } from 'react'
import ChildA from './ChildA'
// import ChildC from './ChildC' ;

const data = createContext();
const data1 = createContext();
const data2 = createContext();

function UseContextHook() {

    const name = "shivangi"
    const surname = "Modhiya"
    const gender = "Female"

  return (
    <>
    <div className="container">
    <data.Provider value={name}>
    <data1.Provider value={surname}>
    <data2.Provider value={gender}>
        <ChildA/>
    </data2.Provider>
    </data1.Provider>
    </data.Provider>
    </div>
    </>
  )
}

export default UseContextHook;
export {data,data1,data2}