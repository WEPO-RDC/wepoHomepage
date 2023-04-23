import sparker from './../assets/sparker.svg'

import ladyphone from './../assets/lady2.png'

import {gsap} from 'gsap'
import {useEffect} from "react"
import Form from "./Form"
import {Solutions} from '../components'


let downloadLink = {
  android: "https://play.google.com/store/apps/details?id=com.wepo_app",
  ios:""
}

function Cta(props){
    return(
        <div className="CTA-container">
            <a target="_blank" href={downloadLink.android} className={props.a}>
              
              <div style={{display:'flex', flexDirection:'row', alignContent:'space-between', gap:'15px', alignItems:'center', margin:'auto'}}>
                <p style={{textAlign:'center'}}>
              Téléchargez la version android maintenant
              </p>
              <i style={{margin:"unset", fontSize:'29'}} className="fab fa-google-play fa-xl" />
                </div>
            </a>
            
        </div>
    )
}

function Hero(props) {


    return(
      <>
      {props.show && <Form 
      close = {props.toggle}
      doSubmit = {props.doSubmit}/>
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
        <Cta a="CTA"/>
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
        <Cta a="CTA xx"/>
    </div>

        </>
    )
}

export default Hero
