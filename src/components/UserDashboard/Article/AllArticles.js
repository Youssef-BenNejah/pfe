import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getArticles, deleteArticle } from '../../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Header from '../Header';
import './articles.css'



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


const AllArticles = () => {

    const [articles, setArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllArticles();
    }, []);

    const deleteArticleData = async (id) => {
        await deleteArticle(id);
        getAllArticles();
    }

    const getAllArticles = async () => {
        let response = await getArticles();
        setArticles(response.data);
    }

    return (

        <div className='main-content'>
            <NavBar />
            <Header />

            
            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={"/add-article"}>Ajouter article</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Prix Unitaire HT</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Quantite</TableCell>
                        <TableCell>Total HT</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles.map((article) => (
                        <TableRow className={classes.row} key={article._id}>
                            <TableCell>{article._id}</TableCell>
                            <TableCell>{article.Prix_Unitaire_HT}</TableCell>
                            <TableCell>{article.Description}</TableCell>
                            <TableCell>{article.Quantite}</TableCell>
                            <TableCell>{article.Prix_Unitaire_HT*article.Quantite}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit-article/${article._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteArticleData(article._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllArticles;  