import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getContacts, deleteContact } from '../../../Service/service';
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


const AllContacts = () => {

    const [contacts, setContacts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllContacts();
    }, []);

    const deleteContactData = async (id) => {
        await deleteContact(id);
        getAllContacts();
    }

    const getAllContacts = async () => {
        let response = await getContacts();
        setContacts(response.data);
    }

    return (
        <div className='main-content'>
            <NavBar />
            <Header />
            <Link to="/add-contact"> <button className='las la-plus button'></button></Link>

            <Table id="customers">
                
                    <tr >
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Entreprise</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Adresse</th>

                        <th>Action</th>
                    </tr>
               
                    {contacts.map((contact) => (
                        <tr  key={contact._id}>
                            <td>{contact._id}</td>
                            <td>{contact.nom}</td>
                            <td>{contact.prenom}</td>
                            <td>{contact.entreprise}</td>
                            <td>{contact.telephone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.adresse}</td>

                            <TableCell>
                                <Button ><span className='aa las la-trash' onClick={() => deleteContactData(contact._id)}></span></Button>
                                <Button component={Link} to={`/edit-contact/${contact._id}`}><span className='aa las la-cog' ></span></Button>
                            </TableCell>
                        </tr>
                    ))}
                
            </Table>
        </div>
    )
}

export default AllContacts;  