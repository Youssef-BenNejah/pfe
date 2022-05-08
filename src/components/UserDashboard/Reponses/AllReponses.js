import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { deleteReponse, getReponses } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
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


const AllReponses = () => {
    const [name, setName] = useState('')

    const [reponses, setReponses] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            setName(user.name)
        }
        getAllReponses();
    }, []);
    const deleteReponseData = async (id) => {
        await deleteReponse(id);
        getAllReponses();
    }


    const getAllReponses = async () => {
        let response = await getReponses();
        setReponses(response.data);
    }


    return (
        <div className='main-content'>

            <NavBar />
            <Header />

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Reponse</TableCell>



                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reponses.map((reponse) => (
                        <TableRow className={classes.row} key={reponse._id}>
                            <TableCell>{reponse.reponse}</TableCell>
                            <TableCell>
                                <Button></Button>
                                <span className='aa las la-trash' onClick={() => deleteReponseData(reponse._id)}></span>

                            </TableCell>







                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllReponses;  