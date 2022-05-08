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
            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={"/add-expense"}>Ajouter dépense</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Catégorie</TableCell>
                        <TableCell>Date de paiement</TableCell>
                        <TableCell>Etat de paiement</TableCell>
                        <TableCell>Montant a payer</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense) => (
                        <TableRow className={classes.row} key={expense._id}>
                            <TableCell>{expense._id}</TableCell>
                            <TableCell>{expense.Categorie}</TableCell>
                            <TableCell>{expense.Date_paie}</TableCell>
                            <TableCell>{expense.Etat_paie}</TableCell>
                            <TableCell>{expense.Prix}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit-expense/${expense._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteExpenseData(expense._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllExpenses;  