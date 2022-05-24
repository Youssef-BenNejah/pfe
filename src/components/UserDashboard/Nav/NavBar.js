import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './navbar.css'
import logo from "../../../Images/logo.png"
import jwt from 'jsonwebtoken'
import { getReponses } from '../../../Service/service'






function NavBar() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [reponses, setReponses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            setName(user.name)

            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            }
        }
        getAllReponses() ;
    }, [])
    const getAllReponses = async () => {
      let response = await getReponses();
      setReponses(response.data);
  }

    const Logout = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }
  

    return (
        <>
<div className='sidebar'>
        <div className='sidebar-brand'>
          <h1><span className='las la-accusoft'></span><img src={logo}/></h1>
        </div>
        <div className='sidebar-menu'>
          <ul>
            <li >
              <Link to="/dashboard" className='active link'>
                <span className='las la-igloo'>
                </span>
                <span>Tableau de bord</span>
              </Link>
            </li>
            <li>
            <Link to="/all" className='active link'>
                <span className='las la-file-invoice-dollar'>
                </span>
                <span>Factures</span>
              </Link>
            </li>
            <li>
            <Link to="/all-articles" className='active link'>
                <span className='las la-box'>
                </span>
                <span>Articles</span>
              </Link>
            </li>
            <li> 
            <Link to="/all-expenses" className='active link'>
                <span className='las la-hand-holding-usd'>
                </span>
                <span>Dépenses</span>
              </Link></li>
              <li>
            <Link to="/all-contacts" className='active link'>
                <span className='las la-users'>
                </span>
                <span>Contacts</span>
              </Link>
            </li>
            <li>
            <Link to="/add-message" className='active link'>
                <span className='las la-paper-plane'>
                </span>
                <span>Messages</span>
            
              </Link>
            </li>
            <li>
            <Link to="/all-reponses" className='active link '>
                <span className='las la-envelope-open-text'>
                </span>
                <span className='boite'>Boite de reception</span>  <p className='notif'>{reponses.length}</p>   
                
              </Link>
            </li>
            <li className='logout'>
            <button  id="btn"className='active link' onClick={Logout}>
                <span className='la la-sign-out-alt'>
                </span>
                <span>Se déconnecter</span>
              </button>
            </li>
            
          </ul>

        </div>
      </div>





        </>

    )
}

export default NavBar