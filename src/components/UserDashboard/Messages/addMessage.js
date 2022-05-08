import React, { useState } from 'react'
import NavBar from '../Nav/NavBar';
import Header from '../Header';
import { addMessage } from '../../../Service/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';


const initialValue = {
    name: '',
    email: '',
    message: '',
    etat: 'non-repondu'
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

function AddMessage() {
    const [messages, setMessages] = useState(initialValue);
    const { name, email, message } = messages;
    const classes = useStyles();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setMessages({ ...messages, [e.target.name]: e.target.value })
    }
    const addMessageDetails = async () => {
        await addMessage(messages);
        console.log(messages);
        toast.success('Votre message a été envoyé avec succès !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setMessages(initialValue);
    }
    return (
        <div className='main-content'>
            <NavBar />
            <Header />
            <div className='form'>

                <FormGroup className={classes.container}>
                    <Typography variant="h5">Poser votre question ou envoyer nous votre feedback</Typography>
                    <div className='text2'>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Entrer votre nom</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Entrer votre email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                        </FormControl>
                    </div>
                    <FormControl>
                        <InputLabel htmlFor="my-input">votre message</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name='message' value={message} id="my-input" />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" color="primary" onClick={() => addMessageDetails()}>Envoyer</Button>
                        <ToastContainer />
                    </FormControl>

                </FormGroup>


            </div>

        </div>
    )
}

export default AddMessage