import './App.css';

import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';



let wepoUrl="https://dev.wepo.tech/api/board_post/lists/default/"

const headers = new Headers({
    'Content-Type': 'text/json',
    mode : 'cors'
  });
function App() {
    const [responsive, setResponsive] = useState("web")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [showForm, setShowForm] = useState(false)
    const [result, setResult] = useState([])
    const [submit, setSubmit] = useState(false)


    function Submitted(){
      setSubmit(prev => !prev)
    }


    function toggleShow(){
      setShowForm(prev =>!prev)
    }
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

    let elements = result.map(item => <div><p>{item.post_title}</p>
    <p>{item.post_content}</p><hr/></div>)
    return (
        <div className="App">
            <Navbar responsive={responsive} screenWidth={screenWidth} />
            {<Hero toggle = {toggleShow} show = {showForm} isSubmitted = {submit} doSubmit = {Submitted} />}
            
            <Footer />
        </div>
    );
}

export default App;
