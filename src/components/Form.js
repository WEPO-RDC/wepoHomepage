import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGoogleApi, GoogleApiProvider } from 'react-gapi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {primaryColor} from "../styles/magStyle"
import axios from 'axios';
import { AiFillCloseCircle } from "react-icons/ai"
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {writeInSheet,gisLoaded, gapiLoaded, DISCOVERY_DOC,apiKey, SCOPES, CLIENT_ID, isDRCCongoPhoneNumber, isValidEmail, } from '../utils';

function Form(props) {
    
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
        if(!isValidEmail(input.email)){
            toast.error("Veuillez inserer un email correct", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log("Error: Incorrect Email")

            return;
        }
        else if(!isDRCCongoPhoneNumber(input.phone))
        {
            toast.error("Veuillez inserer un numero de telephone correct", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            console.log("Error: Incorrect Number")
            return;
        }

        let now = new Date().toLocaleString()
        try{
            gisLoaded()
            gapiLoaded()
            writeInSheet({now,input})
            /*
            axios.post(url, {time:now,...input})
            .then(response => {
                console.log(response.data, " was submitted")
            })
            */
           props.close()
           props.doSubmit()
           setInput({nom:'', email:'', prenom:'', phone:'', occupation:''})
           
            
           toast.success("Merci des vous enregistrez nous vous informerons dès que nous lançons l'application.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }catch(err){
            console.log("Error:" + err.message)
          toast.error("Nous n'avons pas pu soumettre votre inscription", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })


    }

    return (
        <GoogleApiProvider clientId= {CLIENT_ID}>

        <div className="okform">
            <ToastContainer/>
            
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
                <FormControlLabel className='rara' value="Contre-valeur" name="occupation" onChange={handleChange} control={<Radio />} label="Contre-valeur" />
                <FormControlLabel className='rara' value="Autre" name="occupation" onChange={handleChange} control={<Radio />} label="Autre" />
              </RadioGroup>
            </div>
            <Button onClick={handleSubmit}  color="primary" width={300} sx={{color:'white', marginTop:'1.5rem', background:primaryColor, width:300}} type='submit' className='CTA' variant="contained">S'inscrire</Button>

            </form>
        </div>
    </GoogleApiProvider>
    )
}
}
export default Form
