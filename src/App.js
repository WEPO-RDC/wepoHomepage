import logo from './weposvg.svg';
import './App.css';
import React, {Component} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import * as magStyle from "./styles/magStyle"





function App() {

  const [responsive, setResponsive] =useState("web")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [formStatus, setFormStatus] = useState(false)


  function openForm(){
    if (!formStatus){
      setFormStatus(true)
    }
  }

  //a function for closing the  pop up if someone submit the form.
  function closeForm(){
    if(formStatus){
      setFormStatus(false)
    }
  }

  useEffect(()=>{

    function watchWidth(){
      setScreenWidth(window.innerWidth)
      if (window.innerWidth<=450){
        setResponsive("mobile")
        console.log(window.innerWidth)

      }
      else if (window.innerWidth>900){
        setResponsive("web")
        console.log("Window size is fine")
      }
    }
    window.addEventListener("resize", watchWidth);
  },[screenWidth])
  return (
    <div className="App">
      <Navbar responsive = {responsive} screenWidth={screenWidth}/>
      {/*<Form/>*/}
      
      <Hero toggle={openForm}/>
      {formStatus && <Form toggleOff={closeForm}/>}
      <Footer/>
    </div>
  );
}

export default App;
