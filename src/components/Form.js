import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {primaryColor, primaryColorLight, primaryColorSuperLight, secondaryColor, lineColor, confirmColor} from "../styles/magStyle"
import axios from 'axios';
import { AiFillCloseCircle } from "react-icons/ai"




//RAW
//const {google} = require('googleapis')
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";


const url = 'https://sheet.best/api/sheets/6d046578-d62e-4f8e-99a7-ba3bfaa431fa'
const spreadSheet = process.env.REACT_APP_SS_ID
const ApiKey = process.env.REACT_APP_SHEET_API_KEY
const CLIENT_ID = process.env.REACT_APP_SHEET_CLIENT_ID

function Form(props) {
  //let sheets = google.sheets('v4');
  const [input, setInput] = useState({
        nom:'',
        prenom:'',
        email: '',
        phone: '',
        occupation: ''
    })
    const [alt,setAlt] = useState(props.alert)
    
  

    //const [formStatus, setFormStatus] = props.formStatus
    function handleChange(e){
        setInput((prev)=>
        ({...prev,
        [e.target.name]:e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        try{
          axios.post(url, input)
            .then(response => {
            console.log(response);
          })
          setInput({nom:'', email:'', prenom:'', phone:'', occupation:''})
            props.alertOn()
          props.toggleOff()
        }catch(err){
          console.log("I am sorry" + err.message)
        }
        props.close()

    }

    return (
        <div className="okform">

                {/*Merci des vous enregistrez nous vous informerons dès que nous lançons l'application.*/}
            
            <form className='form' onSubmit={handleSubmit}>

            <AiFillCloseCircle id="close" onClick={props.close} color="black"/>


                <h2>
                    Entrez vos informations pour faire partie de la liste d'attente.
                </h2>
                <div className="inputField">
                    <TextField
                        required
                        name='nom'
                        id="nom"
                        label="Nom"
                        defaultChecked="Hello World"
                        value={input.nom}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name='prenom'
                        id="prenom"
                        label="Prenom"
                        defaultChecked="Hello World"
                        value={input.prenom}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name='email'
                        id="email"
                        label="email"
                        defaultChecked="Hello World"
                        value={input.email}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name='phone'
                        id="phone"
                        label="Numéro de Téléphone"
                        value={input.phone}
                        defaultChecked="Hello World"
                        onChange={handleChange}
                    />
                </div>
                <div className="radioN">
                    <FormLabel id="demo-radio-buttons-group-label">Lequel vous décrit le mieux ?</FormLabel>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 18,
                            },
                        }}
                    >

                <FormControlLabel className='rara' value="Vendeur" name="occupation" onChange={handleChange}control={<Radio />} label="Vendeur/Vendeuse" />
                <FormControlLabel className='rara' value="Vendeuse" name="occupation" onChange={handleChange} control={<Radio />} label="Acheteur/Acheteuse" />
                <FormControlLabel className='rara' value="Commissionaire" name="occupation" onChange={handleChange} control={<Radio />} label="Commissionaire" />
                <FormControlLabel className='rara' value="Amoureux de Contre-valeur" name="occupation" onChange={handleChange} control={<Radio />} label="Contre-valeur" />
                <FormControlLabel className='rara' value="Autre" name="occupation" onChange={handleChange} control={<Radio />} label="Autre" />
              </RadioGroup>
            </div>
            <Button  color="primary" width={300} sx={{color:'white', marginTop:'1.5rem', background:primaryColor, width:300}} type='submit' className='CTA' variant="contained">S'inscrire</Button>

            </form>
            {/*<p>{input.nom}</p>
        <p>{input.email}</p>
        <p>{input.phone}</p>*/}
        </div>
    )
}

export default Form
