import React, {useMemo, useState } from 'react'

function UseMemoHooksInFunctionalCompo() {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    // function multiply() {
    //     console.log("*********");
    //     return add*10
    // }

    const multiplication = useMemo(function multiply() {
        console.log("*********");
        return add*10
    },[add])


  return (
    <>
    <div className="app container">
        <h1>Learning useMemo</h1>
        {multiplication}<br/>
        <button onClick={()=>setAdd(add+1)}>addition</button>
        <span>{add}</span><br/>
        <button onClick={()=>setMinus(minus-1)}>substraction</button>
        <span>{minus}</span>
    </div>
    </>
  );
}

export default UseMemoHooksInFunctionalCompo