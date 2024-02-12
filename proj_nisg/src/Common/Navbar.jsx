import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import "./Navbar.css"
// import { Outlet } from 'react-router-dom';
// import logo from "../img/logo.jpg"


export default function Navbar() {
  const [openNav, setOpenBasic] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand >
          <div className='logo'>
       <img src={logo} alt='Logo'/>
            </div>
        </MDBNavbarBrand> */}

        

        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link to={"/home"}>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            

            <MDBNavbarItem>
              <MDBNavbarLink >
              <Link to={"/about"}>About</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink >
              <Link to={"/contact"}>Contact</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink >
              <Link to={"/Crud"}>Crud</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink >
              <Link to={"/hooks"}>Hooks</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            
            
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    {/* <Outlet/> */}
    </>
  );
}