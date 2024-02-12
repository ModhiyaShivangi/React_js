import React from 'react'
import {createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home'
import Navbar from '../Components/Common/Navbar'
import About from '../Components/Pages/About' 
import Product from '../Components/Pages/Product'
import Example from '../Components/Pages/Example'
import CSSIssues from '../Components/Pages/CSSissues';
import FunctionalCompoRoute from '../Components/FunctionalComponent/FunctionalCompoRoute'
import { Suspense } from 'react';
// import Classcomporoute from './Classcomponent/Classcomporoute';

const Classcomporoute = React.lazy(()=> import('../Components/Classcomponent/Classcomporoute'))
const about = React.lazy(()=> import('../Components/Pages/About'))
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
    }, {
        path : "/Product",
        element : <><Navbar/><Product/></>
    },{
        path : "/example",
        element : <><Navbar/><Example/></>,
        children : [
            {
                path : "Classcomponent/*",
                element : <><Suspense fallback={<h1>Loading..</h1>}><Classcomporoute/></Suspense></>
            }
        ]
    },
    {
        path : "/example",
        element : <><Navbar/><Example/></>,
        children : [
            {
                path : "FunctionalComponent/*",
                element : <><Suspense fallback={<h1>Loading..</h1>}><FunctionalCompoRoute/></Suspense></>
            }
        ]
    },{
        path : "/CSSIssues",
        element : <><Navbar/><CSSIssues/></>
    }, 
]);

export default Mainrouter
