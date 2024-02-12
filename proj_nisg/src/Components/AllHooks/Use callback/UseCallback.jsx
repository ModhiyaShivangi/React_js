import React, { useCallback, useState } from 'react'

let mySet = new Set();

const UseCallback = () => {
    
const [a, setA] = useState(0)
const [b, setB] = useState(0)

const MyFunction1 = useCallback(() =>{
    setA(a+1)
},[a])
const MyFunction2 = useCallback(() =>{
    setB(b+1)
},[b])

 mySet.add(MyFunction1)
 mySet.add(MyFunction2)

 console.log(mySet.size);

  return (
    <div className='container'>
        <h1> add {a}</h1>
        <h1> add {b}</h1>
      <button onClick={MyFunction1}>add a</button>
      <button onClick={MyFunction2}>add b</button>

    </div>
  )
}

export default UseCallback
