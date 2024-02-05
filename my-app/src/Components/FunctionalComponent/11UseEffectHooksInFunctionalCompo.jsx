
import React, { useEffect, useState} from 'react';


const UseEffectHooksInFunctionalCompo = () => {
    const[count,setcount] = useState(0)
    const[data,setdata] = useState(0)

    useEffect (()=>{
        alert("called useeffect");
        // console.log("called useeffect");
       
    },[count,data])
   

    return (  
        <>
    <div className="container">
         <h2>What is the useEffect() Hook used for?</h2>
        <p>The useEffect() Hook is a built-in Hook in React that allows functional
            components to perform side effects. <b>It replaces the lifecycle methods like
            componentDidMount(), componentDidUpdate(), and
            componentWillUnmount().</b></p>
            <p><b>The useEffect() Hook runs after every render by
            default.</b></p>
            <p>Whenever component will render first of all function will run. it means mounting then updating and 
                then unmounting.</p>


        <h2>user: {count}</h2>
        <h2>data:  {data}</h2>
        
        <button onClick={()=> setcount(count + 1)}>update count</button>
        <button onClick={()=> setdata(data + 1)}>update data</button>
        </div>
        </>
     );
}
 
export default UseEffectHooksInFunctionalCompo;



