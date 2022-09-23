import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {primaryColor, primaryColorLight, primaryColorSuperLight, secondaryColor, lineColor, confirmColor} from "../styles/magStyle"
import axios from 'axios';
//RAW
//const {google} = require('googleapis')


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
        occupation:''
    })
    const [alt,setAlt] = useState(props.alert)
    
  

    //const [formStatus, setFormStatus] = props.formStatus
    function handleChange(e){
        setInput((prev)=>
        ({...prev,
        [e.target.name]:e.target.value
        }))
    }

    /*
    function makeApiCall(){
      var params = {

        spreadsheetId: spreadSheet,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        insertDataOption:"INSERT_ROWS"
      }
        var valueRangeBody = {
          values:[input.nom,input.prenom, input.email, input.occupation]
        }
        var request = gapi.clien.sheets.spreadsheets.value.append(params, valueRangeBody)
        request.then(function(response){
          console.log(response.result)
        }, function(reason){
          console.error('error:' + reason.result.error.message)
        })
        
      }
      */


    

   
    

    
    ///function updateValues(p)
    function handleSubmit(e){
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

    }
  return (
    <div className="okform">
        
        <div className='formContainer'>

        <form className='form' onSubmit={
          handleSubmit}>
        <h2>
            Entrez vos informations pour faire parti de la liste d'attente.
        </h2>
            <div className="inputField">
              <TextField
                  required
                  name='prenom'
                  id="prenom"
                  label="Prenom"
                  defaultChecked="Hello World"
                  value={input.prenom}
                  onChange = {handleChange}
                  size="small"
                  />
                <TextField
                required
                name='nom'
                id="nom"
                label="Nom"
                
                defaultChecked="Hello World"
                value={input.nom}
                onChange = {handleChange}
                size="small"
                />
                
                <TextField
                required
                name='email'
                id="email"
                label="email"
                variant="outlined"
                defaultChecked="Hello World"
                value={input.email}
                onChange = {handleChange}
                size="small"
                />
                <TextField
                required
                name='phone'
                id="phone"
                label="Numéro de Téléphone"
                value={input.phone}
                defaultChecked="Hello World"
                onChange = {handleChange}
                size="small"
                />
            </div>
            <div className="radioN">
              <FormLabel id="demo-radio-buttons-group-label">Qu'est-ce qui vous décrit le mieux ?</FormLabel>
                
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },}}
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
        </div>
    </div>
  )
}

export default Form