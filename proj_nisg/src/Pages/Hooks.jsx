import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'




function Hooks() {
  return (
    <>
      <div className="container  mt-5">
      
        <div className="row">
            <div className="col-6 mt-3">
                <h2>
                    <Link to={"/Hooks/AllHooks"}><b>All Hooks</b></Link>
                </h2>
            </div>

           

            <div className="row my-3">
                <div className="col-md-12">
                    <outlet></outlet>
                </div>
            </div>

        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Hooks

