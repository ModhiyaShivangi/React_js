import React from 'react'
import { useRef,useState } from 'react';

const UseRefHooks = () => {

    const refElement = useRef("")
    const [name, setName] = useState("shiviee")
    console.log(refElement);

    function Reset() {
        setName("")
        refElement.current.focus()
    }
    function handleInput() {
        refElement.current.style.color = "blue"
        refElement.current.style.backgroundColor = "red"
    }
  return (
    <>
      <h1>use ref</h1>
      <input ref={refElement} type="text" value={name} 
      onChange={(e) => {setName(e.target.value)}} />

        <button onClick={Reset}>Reset</button>
        
        <button onClick={handleInput}>handleInput</button>

    </>
  )
}

export default UseRefHooks
