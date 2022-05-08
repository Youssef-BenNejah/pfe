import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getSuppliers, deleteSupplier } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';


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


const AllSuppliers = () => {

    const [suppliers, setSuppliers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllSuppliers();
    }, []);

    const deleteSupplierData = async (id) => {
        await deleteSupplier(id);
        getAllSuppliers();
    }

    const getAllSuppliers = async () => {
        let response = await getSuppliers();
        setSuppliers(response.data);
    }

    return (
        <>
            <NavBar />
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {suppliers.map((supplier) => (
                        <TableRow className={classes.row} key={supplier._id}>
                            <TableCell>{supplier._id}</TableCell>
                            <TableCell>{supplier.name}</TableCell>
                            <TableCell>{supplier.username}</TableCell>
                            <TableCell>{supplier.email}</TableCell>
                            <TableCell>{supplier.phone}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit-supplier/${supplier._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteSupplierData(supplier._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default AllSuppliers;  