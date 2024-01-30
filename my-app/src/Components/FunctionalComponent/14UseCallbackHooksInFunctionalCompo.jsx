import React, { useState, useCallback } from 'react';


const Callbackhook = () => {
    const [count, setCount] = useState(0)

    const ChildComponent = ({onclick}) =>{
        return <button onClick={onclick}>Click Me</button>
    }

    const handleclick = useCallback(() => {
        setCount(count+1);
        }, [count])

  return (
    <div className='container'>
        <p>Count : {count}</p>
      <ChildComponent onclick = {handleclick} />
    </div>
  );
};





export default Callbackhook;
