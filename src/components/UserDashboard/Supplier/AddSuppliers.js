import React from 'react'
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addSupplier } from '../../../Service/service';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})



const AddSupplier = () => {
    const [supplier, setSupplier] = useState(initialValue);
    const { name, username, email, phone } = supplier;
    const classes = useStyles();
    let navigate = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setSupplier({ ...supplier, [e.target.name]: e.target.value })
    }

    const addSupplierDetails = async () => {
        await addSupplier(supplier);
        navigate.push('/all-suppliers');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Supplier</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addSupplierDetails()}>Add Supplier</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddSupplier;