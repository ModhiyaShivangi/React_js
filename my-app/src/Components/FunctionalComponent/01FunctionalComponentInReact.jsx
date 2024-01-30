import React from 'react';

const FunctionalComponentInReact = () => {
    return (
        <>
          <div className="container">
          <h2>What is a Functional Component in React?</h2>
          <ol>
          <li><b>A functional component is just a plain JavaScript 
            function that accepts props as an argument and returns a React element(JSX).</b></li>
          <li><b> no render method used in functional components.</b></li>
          <li><b>Functional components run from top to bottom and once the function is returned 
            it can't be kept alive.</b></li>
          <li><b>Also known as Stateless components as they simply accept data and display them in some form, 
            they are mainly responsible for rendering UI.</b></li>
          <li><b>Hooks can be easily used in functional components to make them Stateful.</b></li>
          <li><b>Constructors are not used.</b></li>
          
          </ol>
          
            <div className="alert alert-info">
            function func_name ( ) &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
             &#125; <br /> or <br />
            function_name =  ( ) =&gt;&#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
             &#125; <br />
            </div>
          </div>
        </>
    );
};

export default FunctionalComponentInReact;