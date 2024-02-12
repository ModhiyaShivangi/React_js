import React, { useReducer } from 'react'

    const initialstate = 0;

    function reducer(state, action) {
        switch (action) {
            case "Increment":
                return state + 1;
            case "Decrement":
                return state - 1;
            default:
                return state;
        }
    }
    const UseReducerHook = () => {
    
        const [count, dispatch] = useReducer(reducer, initialstate)
   
  return (
    <>
      <div className="container">

    <h1>Use Reducer Hook</h1>
    <p><b>
        1.Usereducer is hook used for state management<br/>
        2.Alternative of usestate hook<br/>
        3.Preferable for complex statemanagement logic</b></p>
    <div>  count = {count} </div>
    <button onClick={()=> dispatch("Increment")} > Increment</button>
    <button onClick={()=> dispatch("Decrement")} >Decrement</button>
      </div>
    </>
  )

}

export default UseReducerHook