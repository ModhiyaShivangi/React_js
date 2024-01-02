import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Product from './Components/Product';

import { Suspense } from 'react';




const about = React.lazy(()=> import('../src/Components/About'))
const Mainrouter = createBrowserRouter ([
    {
        path : "/",
        Element: <><Navbar/></>
    },
    {
        path: "/Home",
        element: <><Navbar/><Home/></>
    },
    {
        path: "/about",
        element: <><Navbar/>
        <Suspense fallback= {<h1>Loading</h1>}><About/></Suspense>
        </>
    },
    {
        path: "/Product",
        element: <><Navbar/><Product/></>
    }
]);

export default Mainrouter
