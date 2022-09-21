import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ManageHistoryOutlined } from '@mui/icons-material';
import {primaryColor, primaryColorLight, primaryColorSuperLight, secondaryColor, lineColor, confirmColor} from "../styles/magStyle"
import { authorizedbuyersmarketplace } from 'googleapis/build/src/apis/authorizedbuyersmarketplace';

//RAW
//const {google} = require('googleapis')


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

    
    
    async function main(){
    }
    
    const [alert, setAlert] = useState (false)

    //const [formStatus, setFormStatus] = props.formStatus
    function handleChange(e){
        setInput((prev)=>
        ({...prev,
        [e.target.name]:e.target.value
        }))
    }

    async function makeApiCall(){

      const authClient = await authorize()

      var request =  {
        spreadsheetId: spreadSheet,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        insertDataOption:"INSERT_ROWS",
        resource:{values:[input.nom,input,prenom, input.email, input.occupation]

        },
        auth: authClient,
      }
        try{
          const response = (await sheets.spreadsheets.values.append(request)).data;
          response.then(function(response){
            console.log(response.result)
          })
        } catch(err){
          console.error(err)
        }
      
    }

    function initClient(){
      var API_KEY = ApiKey
      var clientId = CLIENT_ID
      var SCOPE = ""

      gapi.client.init({
        "apiKey": apiKey,
        "clientId": clientId,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
      }).then(function(){
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      })
    }
    ///function updateValues(p)
    function handleSubmit(e){
        e.preventDefault();
        try{

          makeApiCall()
          setInput({nom:'', email:'', prenom:'', phone:'', occupation:''})
          setAlert(true)
          
          props.toggleOff()
        }catch(err){
          console.log(err.message)
        }

    }
  return (
    <div className="okform">
        {alert && (<Alert
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
          sx={{ mb: 2 }}
        >
          Merci des vous enregistrez nous vous informerons dès que nous lançons l'application.
        </Alert>)}
        <div className='formContainer'>

        <form className='form' onSubmit={
          handleSubmit}>
        <h2>
            Entrez vos informations pour faire partie de la liste d'attente.
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
              <FormLabel id="demo-radio-buttons-group-label">Lequel vous décrit le mieux ?</FormLabel>
                
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
            <Button color= "primary" sx={{color:'white', background:primaryColor}} type='submit' className='CTA' variant="contained">s'inscrire sur la liste d'attente</Button>

        </form>
        </div>
        {/*<p>{input.nom}</p>
        <p>{input.email}</p>
        <p>{input.phone}</p>*/}
    </div>
  )
}

export default Form