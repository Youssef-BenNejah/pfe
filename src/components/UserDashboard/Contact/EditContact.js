import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getContacts,editContact } from '../../../Service/service';
import Header from '../Header'
import NavBar from '../Nav/NavBar';



const initialValue = {
    nom: '',
    prenom: '',
    entreprise: '',
    telephone: '',
    email:'',
    adresse:''

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

const EditContact = () => {
    const [contacts, setContacts] = useState(initialValue);
    const { nom, prenom, entreprise, telephone,email,adresse } = contacts;
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useHistory();

    useEffect(() => {
        loadContactDetails();
    }, []);

    const loadContactDetails = async() => {
        const response = await getContacts(id);
        setContacts(response.data);
    }

    const editContactDetails = async() => {
        const response = await editContact(id, contacts);
        navigate.push('/all-contacts');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setContacts({...contacts, [e.target.name]: e.target.value})
    }

    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-contacts'> <span className='las la-arrow-left back'></span></Link>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Edit Contact</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nom</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nom' value={nom} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Prénom</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='prenom' value={prenom} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Entreprise</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='entreprise' value={entreprise} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Téléphone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='telephone' value={telephone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>    <FormControl>
                <InputLabel htmlFor="my-input">Adresse</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adresse' value={adresse} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editContactDetails()}>Edit Contact</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default EditContact;