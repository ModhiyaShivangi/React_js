import { useRef, useState } from "react"

function UseRefHook() {

    const [MyNum, setMyNum] = useState(0)

    const inputOne = useRef();
    const inputTwo = useRef();

    const getNumBox = () =>{
    console.log("hello");
    console.log(inputOne.current);
    inputOne.current.style.backgroundColor = "blue"
    }

    const getTextBox = () =>{
    console.log("world");
    console.log(inputTwo);
    inputTwo.current.style.backgroundColor = "red"
    }

    return(
        <>
        <h2>UseRef Hook</h2>

        <input 
        ref={inputOne}
        type="number"
        value={MyNum}
        onChange={(e) =>setMyNum(e.target.value)}
        />
        
        <input 
        ref={inputTwo}
        type="text"
        value={MyNum}
        onChange={(e) =>setMyNum(e.target.value)}
         />

         <h3>Value is: {MyNum}</h3>

         <button onClick={() =>getNumBox()}>Rupees</button>
         <button onClick={() => getTextBox()}>Dollars</button>
        </>
    )
    
}

export default UseRefHook