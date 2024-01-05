import React from 'react';

const RestVsSpreadComponentInReact = () => {
    const sum = (x, y, z) => {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));
    return (
        <>
         <div className="container">

            <h3>The spread (...) </h3>
            <p><b>The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the 
                properties of an object and adds the key-value pairs to the object being created.</b></p>
            <div className="alert alert-info p-3">
                const sum = (x, y, z) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />
                const numbers = [1, 2, 3]; <br />
                console.log(sum(...numbers)); <br />
            </div>

            <div className="alert alert-info p-3">
                function myFunction(x, y, z) &#123;  &#125;<br />
                const args = [0, 1, 2];  <br />
                myFunction.apply(null, args);  <br />
            </div>

            
            <h3>The Rest (...) </h3>
            <p><b>The Rest (...) parameter syntax allows a function to accept an indefinite number of arguments as an array,
                providing a way to represent variadic functions in JavaScript.</b></p>
            <div className="alert alert-info p-3">
                function myFunction(v, w, x, y, z)  &#123;  &#125;<br />
                const args = [0, 1];
                myFunction(-1, ...args, 2, ...[3]);
                const parts = ["shoulders", "knees"];
                const lyrics = ["head", ...parts, "and", "toes"];
            //  ["head", "shoulders", "knees", "and", "toes"]


                const sum = (x, ...y) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />
                
                console.log(sum(12,45,98,654)); <br />
            </div>
            </div>
        </>
    );
};

export default RestVsSpreadComponentInReact;