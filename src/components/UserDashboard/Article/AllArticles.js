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


            <Link to="/add-article"> <button className='las la-plus button'></button></Link>


            <Table id="customers">
               
                    <tr >
                        <th>Id</th>
                        <th>Prix Unitaire HT</th>
                        <th>Description</th>
                        <th>Quantite</th>
                        <th>Total HT</th>
                        <th>Action</th>
                    </tr>
                
               
                    {articles.map((article) => (
                        <tr  key={article._id}>
                            <td>{article._id}</td>
                            <td>{article.Prix_Unitaire_HT}</td>
                            <td>{article.Description}</td>
                            <td>{article.Quantite}</td>
                            <td>{article.Prix_Unitaire_HT * article.Quantite}</td>
                            <td>
                                <Button ><span className='aa las la-trash' onClick={() => deleteArticleData(article._id)}></span></Button>
                                <Button component={Link} to={`/edit-article/${article._id}`}><span className='aa las la-cog' ></span></Button>
                            </td>
                        </tr>
                    ))}
               
            </Table>
        </div>
    )
}

export default AllArticles;  