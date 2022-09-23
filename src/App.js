import logo from './weposvg.svg';
import './App.css';
import React, {Component} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import * as magStyle from "./styles/magStyle"
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';




function App() {
  const [responsive, setResponsive] =useState("web")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [formStatus, setFormStatus] = useState(false)
  const [alert, setAlert] =useState(false)

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
  function alertOn(){
    setAlert(true)
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

  useEffect(()=>{

  })
  return (
    <div className="App">
      <Navbar responsive = {responsive} screenWidth={screenWidth}/>
      {/*<Form/>*/}
      { ( alert && <Alert
        style={{alignSelf:'center',color:'white',background:'#0BCF67', justifySelf:'center', margin:'auto',zIndex:20, position:'fixed', right:'13%', bottom:'2%'}}
        sx={{width:'70%', color:'white'}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }

        >
          Merci des vous enregistrez ☺️. Nous vous informerons dès que nous lançons l'application 😉.
        </Alert>)}
      {formStatus && <Form alertOn={alertOn} toggleOff={closeForm}/>}
      <Hero toggle={openForm}/>
      
      <Footer/>
    </div>
  );
}

export default App;
