import React, { Component }  from 'react';
import './App.css';
import NavBar from './Navbar';
import Footer from './Footer';
import Slider from './Slider'  
import Slider3 from './Slider3'  
import About from './About'  
import Services from './Services'  
import Comments from './Comments'  
import Blogs from './Blogs';
import Slider2 from "./Slider2";

function App() {
  return (
    <>  
      <NavBar/>
      <Slider/>
      <About />
      <Services />
      <Slider2/>
      <Comments />
      <Slider3 />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;