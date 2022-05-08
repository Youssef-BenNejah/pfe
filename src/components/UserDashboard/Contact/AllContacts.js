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
            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={"/add-contact"}>Ajouter contact</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Entreprise</TableCell>
                        <TableCell>Téléphone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Adresse</TableCell>

                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow className={classes.row} key={contact._id}>
                            <TableCell>{contact._id}</TableCell>
                            <TableCell>{contact.nom}</TableCell>
                            <TableCell>{contact.prenom}</TableCell>
                            <TableCell>{contact.entreprise}</TableCell>
                            <TableCell>{contact.telephone}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.adresse}</TableCell>

                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit-contact/${contact._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteContactData(contact._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllContacts;  