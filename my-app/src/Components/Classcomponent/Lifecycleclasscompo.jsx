import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecycleclasscompo extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state={counter:0}
    }
    // componentWillMount() { console.log("componentWillMount"); }
    componentDidMount() { console.log("componentDidMount"); }
    // componentWillReceiveProps(nextProps) { console.log("componentWillReceiveProps"); }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false
        return true
    }
    // componentWillUpdate(nextProps, nextState) { console.log("componentWillUpdate"); }
    componentDidUpdate(prevProps, prevState) { console.log("componentDidUpdate"); }
    componentWillUnmount() { console.log("componentWillUnmount"); }
    render() {
        console.log("render");
        return (
            <>
                        <div className='container mt-5'>
                <h2>Q.- What is a React Component   Lifecycle ?</h2>
                <p><b>React component lifecycle refers to a series of phases that a component
                goes through from initialization to destruction. The key lifecycle methods.</b></p>
            <ul><li><b>Mounting</b>: constructor(), render(), componentDidMount()</li>
                <li><b>Updating</b>: render(), componentDidUpdate()</li>
                <li><b>Unmounting</b>: componentWillUnmount()</li></ul>

                <button onClick={()=>{ this.setState({counter:this.state.counter+1}) }}>Click {this.state.counter}</button>
         <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1" style={{width:"80%"}} alt="" />
            
     <h2 className='mt-5'>Q.- What is the purpose of the componentDidMount() method ?</h2>
     <p><b>The componentDidMount() method is a lifecycle method that is called
            after a component has been mounted (inserted into the DOM). It is
            commonly used for performing side effects, such as fetching data from an
            API orsubscribing to events.</b></p>

            <h2>Q.- What is the purpose of the shouldComponentUpdate() method?</h2>
            <p><b>The shouldComponentUpdate() method is a lifecycle method that allows
            you to optimize performance by controlling whether or not a component
            should re-render. By implementing this method, you can compare the
            current props and state with the next props and state and decide if a rerender is necessary.</b></p>
            </div>

     </>
        );
    }
}

Lifecycleclasscompo.propTypes = {

};

export default Lifecycleclasscompo;