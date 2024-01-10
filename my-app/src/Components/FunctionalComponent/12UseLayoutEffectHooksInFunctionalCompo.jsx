import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    useEffect(() => {
        console.log("called useEffect");
        getData()
    })
    const getData = async () => {

        await  fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result)
        })
    }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);

        })
        return () => {
            console.log("called return");
        }
    })
    return (
        <>
        <div className="container">
            <h2>What is useLayoutEffect Hook ?</h2>
            <p>The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to 
                prevent blocking the page loading, we should always use the useEffect hook.</p>
            useLayoutEffect Hooks In Functional Compo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>
        </div>
        </>
    );
};

export default UseEffectHooksInFunctionalCompo;