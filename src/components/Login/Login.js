import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import styles from "./styles.module.css";
import 'react-toastify/dist/ReactToastify.css';




function Login() {
	const history = useHistory()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')



	async function loginUser(event) {
		event.preventDefault()
		
		const response = await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				
			}),
		})

		const data = await response.json()
		console.log(response.json)


		if (data.user) {
			localStorage.setItem('token', data.user)
			window.location.href = '/dashboard'
		} else {
			toast.error('Please check your username and password', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		}

	}

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={loginUser}>
						<h1>Connectez-vous à votre compte</h1>
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
							placeholder="Mot de passe"
							name="password"
							onChange={(e)=> setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						<Link to="/reset-password" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Mot de passe oublié ?</p>
						</Link>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Se connecter
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Nouveau ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn} >
							S'inscrire
						</button>
						<ToastContainer />

					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login


