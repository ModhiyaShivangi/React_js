import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {
    const [data, anything] = useState(null)
    const focusPoint = useRef(null)
    const onClickHandler = (event) => {

        // console.log(focusPoint);
        console.log(event);
        console.log(event.target);
        // console.log(focusPoint.current);
        // console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    }
    return (
        <>
        <div className="container">
            <h2>What is the purpose of the useRef() Hook?</h2>
            <p><b>The useRef() Hook is a built-in Hook in React that provides a way to create
            a mutable reference that persists across re-renders of a component. It can
            be used to access DOM elements or store mutable values that won't
            trigger re-renders.
            </b></p>

            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
            <textarea onChange={(event) => {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                // anything("test")
                anything(event.target.value)
            }} />
            {data}
            </div>
        </>
    );
};

export default UseRefEffectHooksInFunctionalCompo;