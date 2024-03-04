import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/IATLogo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
  return (
    <div>
      <header className='mb-3'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <img src={logo} alt='IATLogo' width='150' height='50'/>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/home' className='nav-link ms-5 fw-bold' style={{color: '#F171AB'}}>Places</Link>
                </li>

                <li className='nav-item'>
                  <Link to='#' className='nav-link ms-3 fw-bold' id='link'>Plan Your Trip</Link>
                </li>
              </ul>
            </div>
            <div className='me-3'>
              <Link to='/profile'><i class="bi bi-person-circle" id='profile'></i></Link>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <h2 className='fw-bold ms-4 mb-3'>Let's Explore Myanmar!</h2>
        <p className='fw-bold ms-5'>My Trips</p>
      </div>
    </div>
  )
}

export default Home