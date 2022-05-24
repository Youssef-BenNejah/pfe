import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getExpenses, deleteExpense } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Header from '../Header'



const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllExpenses = () => {

    const [expenses, setExpenses] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllExpenses();
    }, []);

    const deleteExpenseData = async (id) => {
        await deleteExpense(id);
        getAllExpenses();
    }

    const getAllExpenses = async () => {
        let response = await getExpenses();
        setExpenses(response.data);
    }

    return (
        <div className='main-content'>
            <NavBar />
            <Header />
            <Link to="/add-expense"> <button className='las la-plus button'></button></Link>

            <table id="customers">

                <tr >
                    <th>Id</th>
                    <th>Catégorie</th>
                    <th>Date de paiement</th>
                    <th>Etat de paiement</th>
                    <th>Montant a payer</th>
                    <th>Action</th>

                </tr>


                {expenses.map((expense) => (
                    <tr key={expense._id}>
                        <td>{expense._id}</td>
                        <td>{expense.Categorie}</td>
                        <td>{expense.Date_paie}</td>
                        <td>{expense.Etat_paie}</td>
                        <td>{expense.Prix}</td>
                        <td>
                            <Button ><span className='aa las la-trash' onClick={() => deleteExpenseData(expense._id)}></span></Button>
                            <Button component={Link} to={`/edit-expense/${expense._id}`}><span className='aa las la-cog' ></span></Button>
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default AllExpenses;  