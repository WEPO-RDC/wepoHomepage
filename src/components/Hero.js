import sparker from './../assets/sparker.svg'

import ladyphone from './../assets/lady.png'

import {gsap} from 'gsap'
import {useEffect, useState, useRef} from "react"
import Form from "./Form"
import {Solutions} from '../components'

function Cta(props){


    
    return(
        <div className="CTA-container">
            <button onClick = {props.state} className={props.a}>Rejoignez la liste d’attente</button>
        </div>
    )
}

function Hero(props) {

    useEffect(() => {
        //gsap.from(boxRef.current, {opacity:0, duration:1,translateY:10})
        //gsap.to(boxRef.current, {opacity:1, duration:1.5, translateY:0})
        //gsap.from(heroRef.current, {opacity:0, duration:1, translateX:-40})
        //gsap.to(heroRef.current, {opacity:1, duration:2.5, translateX:0})
        //gsap.from(heroBRef.current, {opacity:0, duration:1, translateX:-40} )
        //gsap.to(heroBRef.current, {opacity:1, duration:1.5, translateX:0})
        let tl = gsap.timeline({paused: true, repeat: -1, repeatDelay: 0.5})

        var items = document.querySelectorAll("#copywrite"), length = items.length
        //tl.to(ttRef.current, {y:20, duration:1.5})
        for (let i = 0; i < length; i++) {
            tl.from(items[i], {y: -20, opacity: 0})
            tl.to(items[i], {duration: 1.5, y: 0, opacity: 1, ease: "elastic", delay: 0.1})
            tl.to(items[i], {duration: 2, y: 0, opacity: 1})
            tl.to(items[i], {duration: 0.5, y: 0, opacity: 0, delay: 0})
        }
        tl.play()

    }, [])

    return(
      <>
      { props.show && <Form close = {props.toggle}/>
      }
      <div className = "heroContainer">
      <div  className="heroLeft">
        <div className="slider">
            <div className="slide-1"  >Teka</div>
            <div className="slide-1" >Compenser</div>
            <div  className="slide-3" >Luka</div>
            <div  className="slide-3" ></div>

        </div>
        <h1 id="end">bor nayo cho!</h1>
        <p className="text">Trouvez des produits selon votre budget, Evitez les malaria, comparez les prix des produits, le tout dans une seule application.</p>
        <p className="text">Vous n’acheterez plus les produits d’occasion de la même manière.</p>
        <Cta a="CTA" state={props.toggle}/>
      </div>
      <div  className="heroRight">
        <img alt="lady holding a phone"src={ladyphone}></img>
      </div>
    </div>
    <div className="divide">
      <h2>Nous vous offrons une nouvelle façon de dealer...</h2>
    </div>
    <Solutions/>
    <div className="lastCTA">
        <img alt="phone" className="sparker" src={sparker}></img>
        <h3>Faites parti de ceux qui dealent avec nous</h3>
        <Cta a="CTA xx" state={props.toggle}  />
    </div>

        </>
    )
}

export default Hero
