import React from 'react'
import { Link } from 'react-router-dom'
import MenuSidebar from './MenuSidebar'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Banco Santondor</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/login'>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/register'>Register</Link>
                        </li>
                        <li className='nav-item'>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header