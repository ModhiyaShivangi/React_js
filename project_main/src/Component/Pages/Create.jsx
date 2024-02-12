import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()

     const header = {"Access-Control-Allow-Origin": "*" };

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post("https://65be24f5dcfcce42a6f1e9f4.mockapi.io/crud-demo",{
                name: name,
                email: email,
                header,
            })
    }
  return (
    <>
    <h2>Create</h2>
     <form>
        <div className="mt-5">
  <div className="form-group mb-4">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control"  
    value={name} onChange={(e) => setName(e.target.value)}/>
  
  </div>
  <div className="form-group ">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" 
    value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="form-group form-check">
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
  {/* <button type="submit" className="btn btn-primary">Back</button> */}
  </div>
</form>
    </>
  )
}

export default Create
