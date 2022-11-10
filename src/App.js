import './App.css';

import React, {Component} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Form from './components/Form';
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

    function update() {
        fetch(wepoUrl, headers)
          .then((res) => {
            return res.json();
            //return res.json();
          })
          .then(res => {
            console.log(res.view.list.data.list)
            setResult(res.view.list.data.list)
        })
          .catch((err) => console.log(err.message));
    }
    function toggleShow(){
      showForm ? setShowForm(false) : setShowForm(true)
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
            {<Hero toggle = {toggleShow} show = {showForm} />}

            <ul>
                
            </ul>
            <Footer />
        </div>
    );
}

export default App;
