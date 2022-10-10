import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

const url = "https://sheet.best/api/sheets/06564bf6-711c-4f14-8de1-3a99f78f19d9"

function Form() {
    const [input, setInput] = useState({
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        occupation: ''
    })

    const [alt, setAlt] = useState(false)

    function handleChange(e) {
        setInput((prev) =>
            ({
                ...prev,
                [e.target.name]: e.target.value
            }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(url, input)
            .then(response => {
                console.log(response)
                toast.success("Ajouté à la liste de diffusion avec succès");
            })
            .catch(error => {
                console.error('error in submitting record to waiting list : ', error.message);
            })
        setInput({nom: '', email: '', prenom: '', phone: '', occupation: ''})
        setAlt(true)
    }

    return (
        <div className="okform">
            {alt && (<Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setAlt(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{mb: 2}}
            >
                Merci des vous enregistrez nous vous informerons dès que nous lançons l'application.
            </Alert>)}
            <form className='form' onSubmit={handleSubmit}>
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

                        <FormControlLabel className='rara' value="Vendeur" name="occupation" onChange={handleChange}
                                          control={<Radio />} label="Vendeur/Vendeuse" />
                        <FormControlLabel className='rara' value="Vendeuse" name="occupation" onChange={handleChange}
                                          control={<Radio />} label="Acheteur/Acheteuse" />
                        <FormControlLabel className='rara' value="Commissionaire" name="occupation"
                                          onChange={handleChange} control={<Radio />} label="Commissionaire" />
                        <FormControlLabel className='rara' value="Autre" name="occupation" onChange={handleChange}
                                          control={<Radio />} label="Autre" />
                    </RadioGroup>
                </div>
                <Button type='submit' variant="contained">s'inscrire sur la liste d'attente</Button>

            </form>
            {/*<p>{input.nom}</p>
        <p>{input.email}</p>
        <p>{input.phone}</p>*/}
        </div>
    )
}

export default Form
