import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import Header from './Header'
import jwt from 'jsonwebtoken'
import { getInvoices, getExpenses, getContacts, getArticles } from '../../Service/service';
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>


import './UserDashboard.css'
function UserDashboard() {
  const [invoices, setInvoices] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [articles, setArticles] = useState([]);

  
  const [name, setName] = useState('')
  useEffect(() => {
    getAllInvoices();
    getAllExpenses();
    getAllContacts();
    getAllArticles();



    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      setName(user.name)

      if (!user) {
        localStorage.removeItem('token')
        history.replace('/login')
      }
    }
  }, [])
  const getAllInvoices = async () => {
    let response = await getInvoices();
    setInvoices(response.data);
  }
  const getAllExpenses = async () => {
    let response = await getExpenses();
    setExpenses(response.data);
  }
  const getAllContacts = async () => {
    let response = await getContacts();
    setContacts(response.data);
  }
  const getAllArticles = async () => {
    let response = await getArticles();
    setArticles(response.data);
  }




  return (
    <>

      <NavBar />

      <div className='main-content'>
        <Header />
        <main>
          <div className='cards'>
            <div className='card-single'>
              <div>
                <h1>{invoices.length}</h1>
                <span>Factures</span>
              </div>
              <div>
                <span className='las la-file-invoice-dollar'></span>


              </div>

            </div>

            <div className='card-single'>
              <div>
                <h1>{articles.length}</h1>
                <span>Articles</span>
              </div>
              <div>
                <span className='las la-box'></span>


              </div>

            </div>
            <div className='card-single'>
              <div>
                <h1>{expenses.length}</h1>
                <span>Dépenses</span>
              </div>
              <div>
                <span className='las la-hand-holding-usd'></span>


              </div>

            </div>
            <div className='card-single'>
              <div>
                <h1>{contacts.length}</h1>
                <span>Contacts</span>
              </div>
              <div>
                <span className='las la-users'></span>


              </div>

            </div>


          </div>

          <div className='recent-grid'>
            <div className='projects'>
              <div className='card'>
                <div className='card-header'>
                  <h3>Factures récentes</h3>
                  <Link to="/all">
                    <button>Voir tout<span className='las la-arrow-right'></span></button>
                  </Link>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Num_fact</td>
                          <td>Date facture</td>
                          <td>Date de paiement</td>
                          <td>Type de paiement</td>
                          <td>Etat de paiement</td>
                        </tr>
                      </thead>
                      <tbody>
                        {console.log(invoices.length - 2)}
                        {invoices.slice(0, 3).map((invoice) => (
                          <tr>
                            <td>{invoice.Num_fact}</td>
                            <td>{invoice.Date_fact}</td>
                            <td>{invoice.Date_paie}</td>
                            <td>{invoice.Type_paie}</td>
                            <td>
                              {invoice.Etat_paie == "non-payé" && <div className='etat_check'><span className='status red'></span><p id='p'>non-payé</p></div>}
                              {invoice.Etat_paie == "payé" && <div className='etat_check'><span className='status green'></span><p id='p'>payé</p></div>}
                            </td>
                          </tr>))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='customers'>
              <div className='card-header'>
                <h3>Nouveau contact</h3>
                <Link to="/all-contacts">
                  <button>Voir tout <span className='las la-arrow-right'></span></button>
                </Link>
              </div>
              <div className='card-body'>

                {contacts.slice(0, 3).map((contact) => (
                  <div className='customer'>
                    <div className='info'>
                      <span className='las la-user'></span>
                      <div>
                        <h4>{contact.nom}</h4>
                        <small>{contact.entreprise}</small>
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
    </>
  )
}
export default UserDashboard