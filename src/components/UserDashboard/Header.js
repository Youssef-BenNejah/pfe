import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'

function header() {
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
  return (
    <header className='header'>
    <div className='search-wrapper'>
      <span className='las la-search'></span>
      <input type='search' placeholder='Search here' />
    </div>

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