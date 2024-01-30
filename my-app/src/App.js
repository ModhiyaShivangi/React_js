// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<><Navbar/><Home/></>}></Route> */}
      {/* <Route path='/' element={<Home/>}></Route> */}
      {/* <Route path='/About' element={<About/>}></Route> */}
      {/* <Route path='/Product' element={<Product/>}></Route> */}
      <Route path='/' element={<Navbar/>}>
        <Route path='Home' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Product' element={<Product/>} />
        <Route path='Example' element={<Example/>} />
        <Route path='CSSmodule' element={<CSSmodule/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

