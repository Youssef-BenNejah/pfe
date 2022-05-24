import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getArticles,editArticle } from '../../../Service/service';
import Header from '../Header'
import NavBar from '../Nav/NavBar';




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

const EditArticle = () => {
    const [article, setArticle] = useState(initialValue);
    const { Prix_Unitaire_HT, Description, Quantite, Total_HT } = article;
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useHistory();

    useEffect(() => {
        loadArticleDetails();
    }, []);

    const loadArticleDetails = async() => {
        const response = await getArticles(id);
        setArticle(response.data);
    }

    const editArticleDetails = async() => {
        const response = await editArticle(id, article);
        navigate.push('/all-articles');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setArticle({...article, [e.target.name]: e.target.value})
    }

    return (
        <div className='main-content'>
        <NavBar />
        <Header />
        <Link to='/all-articles'> <span className='las la-arrow-left back'></span></Link>

        <FormGroup className={classes.container}>
           <Typography variant="h4">Modifier Article</Typography>
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
                <Button variant="contained" color="primary" onClick={() => editArticleDetails()}>Edit Article</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default EditArticle;