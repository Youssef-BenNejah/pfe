import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getMessages } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/Navbar';
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


const AllMessages = () => {
    const [name, setName] = useState('')

    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            setName(user.name)
        }
        getAllMessages();
    }, []);



    const getAllMessages = async () => {
        let response = await getMessages();
        setMessages(response.data);
      
    }



    return (
        <div className='main-content'>

            <NavBar />
            <Header />

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Nom</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Etat</TableCell>


                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {messages.map((message) => (
                        <TableRow className={classes.row} key={message._id}>
                            <TableCell>{message.name}</TableCell>
                            <TableCell>{message.email}</TableCell>
                            <TableCell>{message.message}</TableCell>
                            <TableCell>
                                {message.etat == "non-repondu" && <div className='etat_check'><span className='status red'></span><p id='p'>non-repondu</p></div>}
                                {message.etat == "repondu" && <div className='etat_check'><span className='status green'></span><p id='p'>repondu</p></div>}

                            </TableCell>
                            <TableCell>
                               
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/add-reponse/${message._id}`} onClick={()=> setMessages()} >Répondre</Button>
                               
                                
                                

                            </TableCell>






                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllMessages;  