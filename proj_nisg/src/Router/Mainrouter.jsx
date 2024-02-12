import React from 'react'
import {createBrowserRouter } from 'react-router-dom'
import Navbar from '../Common/Navbar';
import { Suspense } from 'react';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Hooks from '../Pages/Hooks';
import HooksRoute from '../Components/AllHooks/HooksRoute';
import Crud from '../Pages/Crud';
import CrudRoute from '../Components/CrudOperation/CrudRoute';


const Mainrouter = createBrowserRouter ([
    {
        path : "/",
        element : <><Navbar/></>
    },{
        path: "/Home",
        element: <><Navbar/><Home/></>
    }, {
        path : "/about",
        element : <><Navbar/>
        <Suspense fallback= {<h1>Loading</h1>}><About/></Suspense>
        </>
    },{
        path : "/contact",
        element : <><Navbar/>
        <Suspense fallback= {<h1>Loading</h1>}><Contact/></Suspense>
        </>
     },{
        path : "/Hooks",
        element : <><Navbar/><Hooks/></>,
        children : [
            {
                path : "AllHooks/*",
                element : <><Suspense fallback={<h1>Loading..</h1>}><HooksRoute/></Suspense></>
            }
        ]
    },{
        path : "/Crud",
        element : <><Navbar/><Crud/></>,
        children : [
            {
                path : "CrudOperation/*",
                element : <><Suspense fallback={<h1>Loading..</h1>}><CrudRoute/></Suspense></>
            }
        ]
    }


]);


    export default Mainrouter