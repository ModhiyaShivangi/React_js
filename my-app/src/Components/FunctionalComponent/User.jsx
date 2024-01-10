import React from 'react';

const User = (props) => {
    return ( 
        <>
        <h1>user data</h1>
        <h3>{props.count}</h3>
        <h3>{props.data}</h3>
        </>
     );
}
 
export default User;