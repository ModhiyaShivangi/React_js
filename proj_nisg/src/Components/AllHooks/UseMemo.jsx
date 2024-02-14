
import React, {useState,useMemo } from 'react'

const Usememo = () => {

const [x, setX] = useState(0)
const [y, setY] = useState(0)

const longCalculation = (num) => {
    console.log("calculating");
    for (let i = 0; i < 1000000; i++) {
    num += 1;
    }
    return num;
};

const Calculation = useMemo(() => longCalculation(x), [x,y])

  return (
    <>
    <div className='container'>
        <h2> x:  {x}</h2>
        <h2>calculation = {Calculation}</h2>
      <button onClick={()=> {setX(x+1)}}>increment x</button>
        <h2> y:  {y}</h2>
      <button onClick={()=> {setY(y+1)}}>increment y</button>

    </div>
    </>
  )
}

export default Usememo
