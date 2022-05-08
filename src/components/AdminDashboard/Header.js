import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { getUsers } from '../../Service/service';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import './AdminDashboard.css'


function header() {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([]);
  const [searchTerm,SetSearchTerm] = useState ([]);

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
    getAllUsers();
  }, [])


  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  const handleSearchTerm = (e) =>{
    let value = e.target.value;
    SetSearchTerm(value);

  }
  return (
    <header className='header'>
      <div className='search-wrapper'>
        <span className='las la-search'></span>
        <input type='search' placeholder='Search here'  />
      </div>
      {/* {searchTerm=='' ? <p></p>:<div className='search_results'>
        {users.filter((user)=>{
          return user.name.includes(searchTerm)
        }).map((user)=>{
          return (
            <div className='search_result' key={user._id}>
               {user.name}
               </div>
          )
        })}

      </div>} */}

     

      <div className='user-wrapper'>

        <div>
          <h4 className='letter'>{name.charAt(0).toUpperCase()}</h4>
          <small>{name}</small> <br />
          <small> Welcome Back !</small>
        </div>

      </div>

    </header>
  )
}

export default header