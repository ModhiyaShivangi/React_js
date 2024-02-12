
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./../Component/Pages/AboutUs"
import HomeCompo from "./../Component/Pages/HomeCompo.jsx"
import HeaderCompo from './../Component/Common/HeaderCompo.jsx';
import ContactCompo from './../Component/Pages/ContactCompo.jsx';
import APIExample from "./../Component/Pages/APIExample.jsx";
import Logincompo from "./../Component/Pages/Logincompo.jsx";
import SignupCompo from "../Component/Pages/SignupCompo.jsx";
import Crudoperation from "../Crudoperation.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }, {
        path: "/about",
        element: (<><HeaderCompo /><AboutUs /></>),
    }, {
        path: "/contact",
        element: (<><HeaderCompo /><ContactCompo /></>),
    }, {
        path: "/api",
        element: (<><HeaderCompo /><APIExample /></>),
    }, {
        path: "/login",
        element: (<><HeaderCompo /><Logincompo /></>),
    }, {
        path: "/Registration",
        element: (<><HeaderCompo /><SignupCompo /></>),
    },{
        path: "/Crud",
        element: (<><HeaderCompo /><Crudoperation /></>),
    }
])

export default router;