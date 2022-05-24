import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getInvoices, deleteInvoice } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import './Invoice.css'
import jwt from 'jsonwebtoken'
import Header from '../Header'
import Download from '../Download'
import jsPDF from 'jspdf';
import 'jspdf-autotable';



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

  const jsPdfGenerator = () => {

    var doc = jsPDF('p', 'pt');

    // doc.text(20, 20, 'this is default text');
    doc.autoTable({
      head: [['Id', 'Num_fact', 'Date facture	', 'Date de paiement', 'Type de paiement', 'Etat de paiement']],
      body: invoices

    })

    console.log(invoices)
    doc.setFont('courier');

    // doc.text(20, 30, 'This is text with courier font ')

    doc.save('invocie.pdf')


  }



  return (

    <div className='main-content'>


      <NavBar />
      <Header />
      <div className='Header'>



        <Link to="/add"> <button className='las la-plus button'></button></Link>




      </div>


      <table id="customers">

        <tr >
          <th>Id</th>
          <th>Num_fact</th>
          <th>Date facture</th>
          <th>Date de paiement</th>
          <th>Type de paiement</th>
          <th>Etat de paiement</th>
          <th>Action</th>
        </tr>


        {invoices.map((invoice) => (
          <tr key={invoice._id}>
            <td>{invoice._id}</td>
            <td>{invoice.Num_fact}</td>
            <td>{invoice.Date_fact}</td>
            <td>{invoice.Date_paie}</td>
            <td>{invoice.Type_paie}</td>
            <td>{invoice.Etat_paie}</td>




            <td>

              <span className='las la-arrow-down download' onClick={() => jsPdfGenerator()}></span>
              <Button ><span className='aa las la-trash' onClick={() => deleteInvoiceData(invoice._id)}></span></Button>
              <Button component={Link} to={`/edit/${invoice._id}`}><span className='aa las la-cog' ></span></Button>

            </td>
          </tr>
        ))}

      </table>


    </div>
  )
}

export default AllInvoices;  