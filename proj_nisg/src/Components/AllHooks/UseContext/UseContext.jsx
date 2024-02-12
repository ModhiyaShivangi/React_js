import React, {  useState } from 'react'
import AuthContext from './AuthContext'
import ChildA from './ChildA'


const UseContext = () => {


const [age, setAge] = useState(3)

const style={border:"1px solid #000"}

function changeAge () {
  setAge(age+1);
};



  return (
    <div className="container">
      
      <AuthContext.Provider value={{age:age, changeAge:changeAge} }>
        <div style={style}>
            <h1>this is parent {age}</h1>
            <button onClick={changeAge}>click me</button>
      <ChildA/>
      </div>
      </AuthContext.Provider>
    </div>
  )
}

export default UseContext

