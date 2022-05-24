import React, { useState } from 'react'
import Main from './Main/Main'
import Navbar from './Nav/Navbar'
import './Landing.css';
import './style.css';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.png"
import eye from "../../Images/3.png"
import money from "../../Images/4.png"
import rapport from "../../Images/6.png"
import { addMessage } from '../../Service/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
  name: '',
  email: '',
  message: '',
  etat: 'non-repondu'
}



const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})
function Landing() {
  const [messages, setMessages] = useState(initialValue);
  const { name, email, message } = messages;
  const classes = useStyles();
  const onValueChange = (e) => {
    console.log(e.target.value);
    setMessages({ ...messages, [e.target.name]: e.target.value })
  }
  const addMessageDetails = async () => {
    await addMessage(messages);
    console.log(messages);
    toast.success('Votre message a été envoyé avec succès !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setMessages(initialValue);
  }

  return (
    <>
      {/* <Navbar />
      <Main /> */}
      <header className="header-area header-sticky">
        <div className="col-12">
          <nav className="main-nav">
            <img className='logo' src={logo} />
            <ul className="nav">
              <li className="scroll-to-section"><a href="#welcome" className="menu-item">Acceuil</a></li>
              <li className="scroll-to-section"><a href="#about" className="menu-item">Fonctionnalités</a></li>
              <li className="scroll-to-section"><a href="#question" className="menu-item">Contactez-nous</a></li>
              <li>
                <Link to='/login' >
                  <button className='main-button-slider ' >Se connecter</button>
                </Link>
              </li>


            </ul>
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="welcome-area" id="welcome">

        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h1>Le future est  <h1 id="startnow">StartNow</h1></h1>
                <p>descritpion </p>
                <Link to='/register' >
                  <button className='main-button-slider ' id='main-button-slider' > S'inscrire </button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about">
        <h1 className='whyfacter'>Pourquoi choisir Facter ?</h1>

        <div className="container">
          <div className="row packages">
            <div className=" package col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src={eye} />

                  <h3>Suivi <br />
                  Consultation <br />
                  Archivage des factures
                  </h3>
                  


                </div>
              </div>
            </div>
            <div className="package image col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">

                  <img src={money} />

                  <h3> <br />
                    Gestion des dépenses <br />
                    
                  </h3>

                </div>
              </div>
            </div>
            <div className=" package col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <div className="features-item">
                <div className="features-icon">
                  <img src={rapport} />


                  <h3> Gestion des contacts  <br />
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   


      <section className="section " id="question">
      {/* <h2 id="h2">Contactez-nous</h2> <br />
      <h3 id="h3">Si vous avez besoin d'aide, nous sommes prêts</h3> */}
      <div className='main'>

        <div className='form'>
          
        <FormGroup className={classes.container}>
                      <Typography  variant="h5" id='h5'>Poser votre question ou envoyer nous votre feedback</Typography>
                      <div className='text2'>
                      <FormControl>
                        <InputLabel htmlFor="my-input">Entrer votre nom</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                      </FormControl>
                      <FormControl>
                        <InputLabel htmlFor="my-input">Entrer votre email</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                      </FormControl>
                      </div>
                      <FormControl>
                        <InputLabel htmlFor="my-input">votre message</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name='message' value={message} id="my-input" />
                      </FormControl>
                      <FormControl>
                        <Button variant="contained" color="primary" onClick={() => addMessageDetails()}>Envoyer</Button>
                        <ToastContainer />
                      </FormControl>

                    </FormGroup>
                

        </div>

      </div>

       

      </section>

      

    </>
  )
}

export default Landing