import './App.css';
import React, {Component} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Form from './components/Form';
import {useEffect, useState} from 'react';


function App() {
    const [responsive, setResponsive] = useState("web")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        function watchWidth() {
            setScreenWidth(window.innerWidth)
            if (window.innerWidth <= 450) {
                setResponsive("mobile")
                console.log(window.innerWidth)

            } else if (window.innerWidth > 900) {
                setResponsive("web")
                console.log("Window size is fine")
            }
        }

        window.addEventListener("resize", watchWidth);
    }, [screenWidth])
    return (
        <div className="App">
            <Navbar responsive={responsive} screenWidth={screenWidth} />
            <Form />

            <Hero />
            <Footer />
        </div>
    );
}

export default App;
