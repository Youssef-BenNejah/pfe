import React  from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "./styles.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmpassword, setConfirmPassword] = useState('')


	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
		// if(password != confirmpassword ) {
		// 	// toast.error("password dont match", {
		// 	// 	position: "top-center",
		// 	// 	autoClose: 5000,
		// 	// 	hideProgressBar: false,
		// 	// 	closeOnClick: true,
		// 	// 	pauseOnHover: true,
		// 	// 	draggable: true,
		// 	// 	progress: undefined,
		// 	// 	});

		// 	alert('erorrrrrrrrrrrrrr')
		// }
		if (data.status === 'ok') {
			history.push('/login');
			

		}else if(data.status === 'error'){
			toast.error(data.error, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});

		}
		console.log(data)
	}
// const validation = (e)=> {
// 	setConfirmPassword(e.target.value)
// 	if ( password != confirmpassword) {
// 		alert ("error !!!!!!!")
// 	}



	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={registerUser}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder=" Name"
							name="name"
							onChange={(e)=> setName(e.target.value)}
							value={name}
							required
							className={styles.input}
						/>
						
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
							placeholder="Password"
							name="password"
							onChange={(e)=> setPassword(e.target.value)}
							value={password}
							
							className={styles.input}
						/>
							{/* <input
							type="password"
							placeholder="confirmpassword"
							name="confirmpassword"
							onChange={(e)=> setConfirmPassword(e.target.value)}
							value={confirmpassword}
							
							className={styles.input}
						/> */}
						
						<button type="submit" className={styles.green_btn}  >
							Sing Up
						</button>
						<ToastContainer />

					</form>
				</div>
			</div>
		</div>
		
	)
}

export default App


