import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from "../../../Images/logo.png"
import jwt from 'jsonwebtoken'






function NavBar() {
    const history = useHistory()
    const [name, setName] = useState('')
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
    }, [])

    const Logout = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }
  

    return (
        <>
<div className='sidebar_admin'>
        <div className='sidebar-brand'>
          <h1><span className='las la-accusoft'></span>StartNow</h1>
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
            <Link to="/all-users" className='active link'>
                <span className='las la-user-tie'>
                </span>
                <span>Gérants</span>
              </Link>
            </li>
            <li>
            <Link to="/all-messages" className='active link'>
                <span className='las la-comment-dots'>
                </span>
                <span>Mesaages</span>
              </Link>
            </li>
            <li>
            <Link to="/add-mail" className='active link'>
                <span className='las la-paper-plane'>
                </span>
                <span>Envoyer un email</span>
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