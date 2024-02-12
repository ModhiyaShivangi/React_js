
import React, { useRef } from "react";

const InputText = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

 function ForwardRef () {

  const inputRef = useRef(null);  

  const clickHandler = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    inputRef.current.value = "red"
    inputRef.current.style.backgroundColor = "red"
    inputRef.current.style.color = "white"

  };

  return (
    <div className="App">
      <h1>React JS Forward Ref</h1>
      <form>
        <InputText ref={inputRef}  />
        <button onClick={clickHandler}>Click Here</button>
      </form>
    </div>
  );
}

export default  ForwardRef