import {  BrowserRouter, Route, Routes } from "react-router-dom";
// import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Header from './components/Header'
import OurFood from "./components/OurFood";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";



function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/ourfood" element={<OurFood/>}/>
      <Route path="/signin" element={<SignIn/>}/>

      </Routes> 
      <Footer/>

     </BrowserRouter>
    </>
  )
}

export default App
