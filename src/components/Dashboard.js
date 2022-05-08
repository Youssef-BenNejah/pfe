import React from 'react'
import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import UserDashboard from './UserDashboard/UserDashboard'


function dashboard() {
    const [role, setRole] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            setRole(user.role)

            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            }
        }
    }, [])
    return (
        <>
            {role == 'user' && <UserDashboard />}
            {role == 'admin' && <AdminDashboard />}


        </>
    )
}

export default dashboard