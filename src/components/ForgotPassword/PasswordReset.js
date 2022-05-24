import React, { useState } from 'react'
import styles from "./styles.module.css";
import { useHistory, useParams } from 'react-router-dom'
function PasswordReset() {

    
    const { token } = useParams()
    console.log(token)
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // const PostData = (e)=>{
    //     e.preventDefault();
    //     fetch("http://localhost:8000/api/new-password",{
    //         method:"post",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             password,
    //             token
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //        if(data.error){
    //           console.log(data.error)
    //        }
    //        else{

    //            history.push('/login')
    //        }
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }

    async function PostData(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8000/api/new-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                token,
                


            }),
        })
        const data = await response.json()
        if (data.error) {
            alert(data.error)

        } else {
            history.push('/login')
        }

    }

    return (
        <div className={styles.container}>
            <form className={styles.form_container} onSubmit={PostData}>
                <h1>Réinitialiser le mot de passe</h1>
                <input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e)=> setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
                <input
                    type="password"
                    placeholder="Enter new password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    className={styles.input}
                />
           
                <button type="submit" className={styles.green_btn} >
                    Submit
                </button>
            </form>
        </div>
    )
}




export default PasswordReset