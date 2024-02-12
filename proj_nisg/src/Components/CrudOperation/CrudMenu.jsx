import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

class CrudMenu extends Component {
  render() {
    return (
      <>
        <ol className="mx-5">
            <li><Link to="Create">Create</Link></li>
            <li><Link to="Read">Read</Link></li>
        </ol>
        <Outlet/>
      </>
    )
  }
}
export default CrudMenu