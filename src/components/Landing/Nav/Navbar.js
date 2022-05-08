import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./styles.module.css";
import logo from "../../../Images/logo.png"




function Navbar() {
    return (
        
        <div className='container'>
                <div className='row'>
                    <div className='col-sm-3' >
                        <img className='navbar__logo' src={logo} alt="LOGO" />
                    </div>
                    <div className='col-sm-6 nav_text' >
                        <h6>Overview</h6>

                        <h6>Features</h6>

                        <h6>Pricing</h6>

                        <h6>About</h6>
                    </div>
                    <div className='col-sm-3  nav_btn'>
                        <Link to={"/login"}>
                            <button className={styles.register_btn} >Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default Navbar