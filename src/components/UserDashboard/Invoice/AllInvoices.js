import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getInvoices, deleteInvoice } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import './Invoice.css'
import jwt from 'jsonwebtoken'
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


const AllInvoices = () => {
  const [name, setName] = useState('')

  const [invoices, setInvoices] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      setName(user.name)
    }
    getAllInvoices();
  }, []);

  const deleteInvoiceData = async (id) => {
    await deleteInvoice(id);
    getAllInvoices();
  }

  const getAllInvoices = async () => {
    let response = await getInvoices();
    setInvoices(response.data);
  }


  return (
    <div className='main-content'>

      <NavBar />
      <Header />
      <div className='Header'>



        <Link to="/add"> <button className='las la-plus button'></button></Link>



        {/* <Button  color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={"/add"}>Ajouter facture</Button> */}

      </div>


      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Num_fact</TableCell>
            <TableCell>Date facture</TableCell>
            <TableCell>Date de paiement</TableCell>
            <TableCell>Type de paiement</TableCell>
            <TableCell>Etat de paiement</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow className={classes.row} key={invoice._id}>
              <TableCell>{invoice._id}</TableCell>
              <TableCell>{invoice.Num_fact}</TableCell>
              <TableCell>{invoice.Date_fact}</TableCell>
              <TableCell>{invoice.Date_paie}</TableCell>
              <TableCell>{invoice.Type_paie}</TableCell>
              <TableCell>{invoice.Etat_paie}</TableCell>




              <TableCell>
                <span className='las la-arrow-down download'></span>
                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${invoice._id}`}>Edit</Button>
                <Button color="secondary" variant="contained" onClick={() => deleteInvoiceData(invoice._id)}>Delete</Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AllInvoices;  