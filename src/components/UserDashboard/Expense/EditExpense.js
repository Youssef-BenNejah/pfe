import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getExpenses,editExpense } from '../../../Service/service';
import NavBar from '../Nav/NavBar';
import Header from '../Header'


const initialValue = {
    Categorie: '',
    Date_paie: new Date(),
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

const EditExpense = () => {
    const [expenses, setExpenses] = useState(initialValue);
    const { Categorie, Date_paie, Etat_paie, Prix } = expenses;
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useHistory();

    useEffect(() => {
        loadExpenseDetails();
    }, []);

    const loadExpenseDetails = async() => {
        const response = await getExpenses(id);
        setExpenses(response.data);
    }

    const editExpenseDetails = async() => {
        const response = await editExpense(id, expenses);
        navigate.push('/all-expenses');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setExpenses({...expenses, [e.target.name]: e.target.value})
    }

    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-expenses'> <span className='las la-arrow-left back'></span></Link>
        <FormGroup className={classes.container}>
              <Typography variant="h4">Edit Expense</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Catégorie</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Categorie' value={Categorie} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date de paiement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Date_paie' value={Date_paie} id="my-input" type='date' required/>
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
                <Button variant="contained" color="primary" onClick={() => editExpenseDetails()}>Edit Expense</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default EditExpense;