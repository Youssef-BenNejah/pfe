import React from 'react'
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addArticle } from '../../../Service/service';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Header from '../Header'


const initialValue = {
    Prix_Unitaire_HT: '',
    Description: '',
    Quantite: '',
    Total_HT: ''
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



const AddArticle = () => {
    const [article, setArticle] = useState(initialValue);
    const { Prix_Unitaire_HT, Description, Quantite, Total_HT } = article;
    const classes = useStyles();
    let navigate = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setArticle({ ...article, [e.target.name]: e.target.value })
    }

    const addArticleDetails = async () => {
        await addArticle(article);
        navigate.push('/all-articles');
    }
    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-articles'> <span className='las la-arrow-left back'></span></Link>

        
        
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Article</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Prix Unitaire</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Prix_Unitaire_HT' value={Prix_Unitaire_HT} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Descirption</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Description' value={Description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantite</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Quantite' value={Quantite} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Total HT</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Total_HT' value={Prix_Unitaire_HT*Quantite} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addArticleDetails()}>Add Article</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default AddArticle;