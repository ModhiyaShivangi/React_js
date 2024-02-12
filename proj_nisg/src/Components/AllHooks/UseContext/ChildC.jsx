import React, { useContext } from 'react'
import AuthContext from './AuthContext'


function ChildC() {

   const data = useContext(AuthContext)
   

    return (
        <>
           <h1>this is child{data.val}</h1>
     <button onClick={() =>{data.changeAge(data.age+1)}}>Change age</button>

        </>
  )
}

export default ChildC