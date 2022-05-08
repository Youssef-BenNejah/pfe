import React from 'react'
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addContact } from '../../../Service/service';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header'
import NavBar from '../Nav/NavBar';



const initialValue = {
    nom: '',
    prenom: '',
    entreprise: '',
    telephone: '',
    email:'',
    adresse:''

}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})



const AddContact = () => {
    const [contact, setContact] = useState(initialValue);
    const { nom, prenom, entreprise, telephone,email,adresse } = contact;
    const classes = useStyles();
    let navigate = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const addContactDetails = async () => {
        await addContact(contact);
        navigate.push('/all-contacts');
    }
    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-contacts'> <span className='las la-arrow-left back'></span></Link>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Contact</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nom</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nom' value={nom} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Prénom</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='prenom' value={prenom} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Entreprise</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='entreprise' value={entreprise} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Téléphone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='telephone' value={telephone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>    <FormControl>
                <InputLabel htmlFor="my-input">Adresse</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adresse' value={adresse} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addContactDetails()}>Add Contact</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default AddContact;