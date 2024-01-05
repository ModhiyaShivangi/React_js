import React from 'react';

const JSXFunctionalComponentInReact = () => {
    var test = "checking"
    return (
        <>
         <div className="container">
            <h2><b>What is JSX in React?</b></h2>     
            <p>JSX is a syntax extension used in React that allows you to write HTML-like
            code within JavaScript. It provides a convenient way to define the
            structure and appearance of React components.</p>       
            50+50={50 + 50}
            <p>test variable data : {test}</p>
            <p> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</p>
            <p> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.</p>
            <p> React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>
        </div>
        </>
    );
};

export default JSXFunctionalComponentInReact;