import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap';

function Form() {

    const data = {
        name: "",
        email: "",
        password: ""
    };

    const [inputData, setinputData] = useState(data)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
      console.log("registerd");
    }, [flag])
    

    function handledata(e) {
        setinputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password ) {
            alert("all fields are mandotary")
        }
        else{
            setFlag(true)
        }
    }

    return (
        <>
        <pre>{(flag)? <h2 className='bg-red-600 text-white pt-2 mt-3 text-center'>
            hello, {inputData.name} you've successfully registerd</h2>:""}</pre>
        <Container>
        <form className="bg-neutral-400 text-center mt-20" onSubmit={handleSubmit}>
            <div className= " bg-purple-950 p-10 my-10 text-white">
                <h1>Registration form</h1>
            </div>
 
            <div>
                <input type="text" name="name" id="" placeholder='Your Name'
                    value={inputData.name} onChange={handledata} />
            </div>
            <div>
                <input type="text" name="email" id="" placeholder='Your Email'
                    value={inputData.email} onChange={handledata} />
            </div>
            <div>
                <input type="text" name="password" id="" placeholder='Password'
                    value={inputData.password} onChange={handledata} />
            </div>
            <div className='bg-purple-950 hover:bg-purple-600 mt-10 p-3 '>
                <button className='w-100 text-white font-bold cursor-pointer text-xl' type="submit">SUBMIT</button>
            </div>
        </form>
        </Container>
</>
    )
}
export default Form
