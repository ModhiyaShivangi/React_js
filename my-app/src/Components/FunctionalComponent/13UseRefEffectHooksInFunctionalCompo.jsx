import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {

    const [MyNum, SetMyNum] = useState(0)

    const inputOne = useRef();
    const inputTwo = useRef();

    const getNumBox = () => {
        // console.log("hello");
        // console.log(inputOne.current);
        inputOne.current.style.width = "400px" 
        inputOne.current.style.backgroundColor = "blue" 
       
        
    }
    
    const getTextBox = () => {
        inputTwo.current.style.width = "400px" 
        // console.log("world");
        // console.log(inputTwo.current);
    }


    return (
        <>
        <div className="container">
            <h2>What is useRef() Hook? and How to Use it?</h2>
            <p>in javascript we used getelementbyid-getelementbyclass for manipulate dom elements and we store it in variable.this practice is really deep rooted. problem is that re-render entire dom element and handle other variable and stuff.
                so in picture came react and that is why we used "UseRef"  </p>
            <p>we can manipulate dom element. UseRef() is designed for store the reference. sometimes we cant manipulate dom using state and props.</p>
            <p>it is an object and that object has .current value that you can access and manipulate dom element</p>
            <p>use ref never re-render dom element no matter how many time you manipulate </p>
           


            <h2>UseRef Hook</h2>
            <input 
            ref={inputOne}
            type="number" 
            onChange={(e)=>SetMyNum(e.target.value)} 
            value={MyNum} />

            <input 
            ref={inputTwo} 
            type="text" 
            onChange={(e)=>SetMyNum(e.target.value)} 
            value={MyNum} />

            <h3>value is : {MyNum}</h3>

            <button onClick={() => getNumBox()}>Rupees</button>
            <button onClick={() => getTextBox()}>Dollar</button>

            </div>
        </>
    );
};

export default UseRefEffectHooksInFunctionalCompo;