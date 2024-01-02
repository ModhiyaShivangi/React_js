import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Example() {
  return (
    <>
      <h1>Example</h1>
      <div className="container mt-3">
        <div className="row">
            <div className="col-6">
                <h3>
                    <Link to={"/Example/Classcomponent"}>Class Component</Link>
                </h3>
            </div>

            <div className="col-6">
                <h3>
                    <Link to={"/Example/Functioncomponent"}>Function Component</Link>
                </h3>
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

export default Example
