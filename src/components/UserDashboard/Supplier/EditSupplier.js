import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getSuppliers,editSupplier } from '../../../Service/service';

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

const EditSupplier = () => {
    const [supplier, setSupplier] = useState(initialValue);
    const { name, username, email, phone } = supplier;
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useHistory();

    useEffect(() => {
        loadSupplierDetails();
    }, []);

    const loadSupplierDetails = async() => {
        const response = await getSuppliers(id);
        setSupplier(response.data);
    }

    const editSupplierDetails = async() => {
        const response = await editSupplier(id, supplier);
        navigate.push('/all-suppliers');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setSupplier({...supplier, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Supplier</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editSupplierDetails()}>Edit Supplier</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditSupplier;