import React, { useState } from 'react'
import axios from 'axios'
import Read from './Read'

const Create = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [showRead,setShowRead] = useState(false)

  // const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRead(true)
  }
  return (
    <>
      <h2>Create</h2>
      <form>
        <div className="mt-5">

       

          <div className="form-group mb-4">
            <label >Name</label>
            <input type="text" className="form-control"
              value={name} onChange={(e) => setName(e.target.value)} />

          </div>
          <div className="form-group mb-4">
            <label >Email</label>
            <input type="email" className="form-control"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group form-check">
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
          
        
          {showRead && <Read  email={email} name={name}  />}
        
        </div>
      </form>
    </>
  )
}

export default Create
