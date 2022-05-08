import React from 'react'
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getMessages, getUsers } from '../../Service/service';
import { Link } from 'react-router-dom';
import NavBar from './Nav/Navbar';
import jwt from 'jsonwebtoken'
import Header from './Header'



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


const AdminDashboard = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])

    const [count, setCount] = useState(0);


    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            setName(user.name)
        }
        getAllMessages();
        getAllUsers();

    }, []);



    const getAllMessages = async () => {
        let response = await getMessages();
        setMessages(response.data);
    }
    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }



    return (
        <div className='main-content'>

            <NavBar />
            <Header />
            <main>

                <div className='cards'>
                    <div className='card-single'>
                        <div>
                            <h1>{users.length}</h1>
                            <span>Gérants</span>
                        </div>
                        <div>
                            <span className='las la-file-invoice-dollar'></span>


                        </div>

                    </div>

                    <div className='card-single'>
                        <div>
                            <h1>{messages.length}</h1>
                            <span>Questions recus</span>
                        </div>
                        <div>
                            <span className='las la-box'></span>


                        </div>
                    </div>
                    
                    <div className='card-single'>
                        <div>
                            {messages =="non-repondu" && <h1>{messages.length}</h1>}
                     

                            
                            <span>Questions repondu</span>
                        </div>
                        <div>
                            <span className='las la-hand-holding-usd'></span>
                        </div>
                    </div>
                    <div className='card-single'>
                        <div>
                            <h1>4</h1>
                            <span>Questions non repondu</span>
                        </div>
                        <div>
                            <span className='las la-hand-holding-usd'></span>
                        </div>
                    </div>
                </div>

                <div className='recent-grid'>
            <div className='projects'>
              <div className='card'>
                <div className='card-header'>
                  <h3>Messages récents</h3>
                  <Link to="/all-messages">
                    <button>Voir tout<span className='las la-arrow-right'></span></button>
                  </Link>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>nom</td>
                          <td>email</td>
                          <td>message</td>
                          <td>etat</td>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {messages.slice(0, 3).map((message) => (
                          <tr>
                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.message}</td>
                            <td>
                            {message.etat == "non-repondu" && <div className='etat_check'><span className='status red'></span><p id='p'>non-repondu</p></div>}
                            </td>
                            {/* <td>
                              {invoice.Etat_paie == "non-payé" && <div className='etat_check'><span className='status red'></span><p id='p'>non-payé</p></div>}
                              {invoice.Etat_paie == "payé" && <div className='etat_check'><span className='status green'></span><p id='p'>payé</p></div>}
                            </td> */}
                          </tr>))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='customers'>
              <div className='card-header'>
                <h3>Nouveau gérants</h3>
                <Link to="/all-users">
                  <button>Voir tout <span className='las la-arrow-right'></span></button>
                </Link>
              </div>
              <div className='card-body'>

                {users.slice(0, 3).map((user) => (
                  <div className='customer'>
                    <div className='info'>
                      <span className='las la-user'></span>
                      <div>
                        <h4>{user.name}</h4>
                        {/* <small>{contact.entreprise}</small> */}
                      </div>
                    </div>
                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            </main>


        </div>
    )
}

export default AdminDashboard;  