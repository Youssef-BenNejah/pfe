import React from 'react'
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addInvoice } from '../../../Service/service';
import { Link, useHistory } from 'react-router-dom';
import './Invoice.css'
import NavBar from '../Nav/NavBar';
import Header from '../Header'


const initialValue = {
    Num_fact: '',
    Date_fact: new Date(),
    Date_paie: new Date(),
    Type_paie: '',
    Etat_paie:'',
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



const AddInvoice = () => {
    const [invoice, setInvoice] = useState(initialValue);
    const { Num_fact, Date_fact, Date_paie, Type_paie,Etat_paie } = invoice;
    const classes = useStyles();
    let navigate = useHistory();
  

    const onValueChange = (e) => {
        console.log(e.target.value);
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

    const addInvoiceDetails = async () => {
        await addInvoice(invoice);
        navigate.push('/all');
    }
    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all'> <span className='las la-arrow-left back'></span></Link>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Ajouter facture</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Numero de facture</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Num_fact' value={Num_fact} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date du facture</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Date_fact' value={Date_fact} id="my-input" type='date'  required/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Date_paie' value={Date_paie} id="my-input" type='date'  required />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Type_paie' value={Type_paie} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Etat de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Etat_paie' value={Etat_paie} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addInvoiceDetails()}>Ajouter facture</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default AddInvoice;