import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getInvoices, deleteInvoice, getUsers, deleteUser } from '../../../Service/service';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import Header from '../Header'
import Navbar from '../Nav/Navbar'
import './gerant.css'



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
  const [users, setUsers] = useState([]);
  const [searchTerm, SetSearchTerm] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      setName(user.name)
    }
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
    console
  }

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    SetSearchTerm(value);

  }

  return (
    <div className='main-content'>

      <Navbar />
      <header className='header'>
        <div className='search-wrapper'>
          <span className='las la-search'></span>
          <input type='search' placeholder='Search here' onChange={handleSearchTerm} />
        </div>




        <div className='user-wrapper'>

          <div>
            <h4 className='letter'>{name.charAt(0).toUpperCase()}</h4>
            <small>{name}</small> <br />
            <small> Welcome Back !</small>
          </div>

        </div>

      </header>
      <div className='Header'>



        {/* <Link to="/add"> <button className='las la-plus button'></button></Link> */}



        {/* <Button  color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={"/add"}>Ajouter facture</Button> */}

      </div>


      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Nom</TableCell>
            <TableCell>Email</TableCell>

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.filter((user)=>{
            return user.name.includes(searchTerm)
          }).map((user) => (
            <TableRow className={classes.row} >
              {user.role == 'user' &&
                <>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button></Button>
                    <span className='aa las la-trash' onClick={() => deleteUserData(user._id)}></span>

                  </TableCell>
                </>


              }







            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AllInvoices;  