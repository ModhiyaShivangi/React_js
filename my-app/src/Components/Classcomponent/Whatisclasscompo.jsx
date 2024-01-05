
import React, { Component } from 'react';


class Whatisclasscompo extends Component {
    otherfunction(){
        return <>otherfunction</>
    }
    otherfunction1(){
        return <>otherfunction 1</>
    }
    otherfunction2(){
        return <>otherfunction 2</>
    }
    render() {
        return (
            <div className='mx-5'>
                <h1><b>What is Class Component in react?</b></h1>
                <p><b>A class component is a JavaScript class that extends the React.Component
                class. It uses the render() method to define the structure and appearance
                of a React component. Class components can have their own state and
                lifecycle methods.</b></p>
                <p>in ReactJs we can create Component using class that will considered as class compo</p>
                <p>class compo have render method for return.</p>
                <p>React Class components have a built-in state object. You might have noticed 
            that we used state earlier in the component constructor section. 
            The state object is where you store property values that belongs to the component. 
            When the state object changes, the component re-renders.</p>
                {/* {this.otherfunction()} */}
            </div>
        );
    }
}

export default Whatisclasscompo;



