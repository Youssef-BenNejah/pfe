import React, { useState } from 'react'
import styles from "./styles.module.css";
import { Link, useHistory } from 'react-router-dom'





function ForgotPassword() {
  const history = useHistory()
  const [email, setEmail] = useState("")

  async function PostData(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:8000/api/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email


      }),
    })

    const data = await response.json()


    if (data.error) {
      alert("error")

    } else {
      history.push('/login')
    }

  }

  return (
    <div className={styles.container}>
      <form className={styles.form_container} onSubmit={PostData}>
        <h1>Mot de passe oublié</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className={styles.input}
        />
        {/* {error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>} */}
        <button type="submit" className={styles.green_btn} >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword