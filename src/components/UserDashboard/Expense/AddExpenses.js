import React from 'react'
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addExpense } from '../../../Service/service';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Header from '../Header'



const initialValue = {
    Categorie: '',
    Date_paie: '',
    Etat_paie: '',
    Prix: ''
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



const AddExpense = () => {
    const [expense, setExpense] = useState(initialValue);
    const { Categorie, Date_paie, Etat_paie, Prix } = expense;
    const classes = useStyles();
    let navigate = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }

    const addExpenseDetails = async () => {
        await addExpense(expense);
        navigate.push('/all-expenses');
    }
    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-expenses'> <span className='las la-arrow-left back'></span></Link>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Expense</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Catégorie</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Categorie' value={Categorie} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Date_paie' value={Date_paie} id="my-input" type='date' required />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Etat de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Etat_paie' value={Etat_paie} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Montant à payer</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Prix' value={Prix} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addExpenseDetails()}>Add Expense</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default AddExpense;