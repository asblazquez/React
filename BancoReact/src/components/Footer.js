import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from './assets/TwitterIcon.png'
import FacebookIcon from './assets/FacebookIcon.png'
import InstagramIcon from './assets/InstagramIcon.png'
import TelefonoIcon from './assets/TelefonoIcon.png'
import DireccionIcon from './assets/DireccionIcon.png'
import EmailIcon from './assets/EmailIcon.png'

const Footer = () => {
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className = 'col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src={TwitterIcon} className = 'mx-2' height='50'/>
                        </Link>
                        <Link to='/home' className = 'col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src={TelefonoIcon} className = 'mx-2' height='50'/>
                        </Link>
                    </nav>
                    <br/>
                    <nav className='row'>
                        <Link to='/home' className = 'col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src={FacebookIcon} className = 'mx-2' height='50'/>
                        </Link>
                    </nav> 
                    <br/>
                    <nav className='row'>
                        <Link to='/' className = 'col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src={InstagramIcon} className = 'mx-2' height='50'/>
                        </Link>
                    </nav>     
                </div>
            </footer>
        </div>
    )
}

export default Footer;