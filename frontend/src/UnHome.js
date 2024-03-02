import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/IATLogo.png'

function UnHome() {
  return (
    <div id='background'>
        <header className='mb-3'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <img src={logo} alt='IATLogo' width='150' height='50' className='ms-3'/>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link fw-bold ms-5' style={{color: '#F171AB'}}>Places</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link fw-bold ms-3' id='link'>Plan Your Trip</Link>
                  </li>
                </ul>
              </div>

              <form className='d-flex' role='submit'>
                <Link to='/login' className='btn btn-outline-secondary me-2 fw-bold'>Login</Link>
                <Link to='/register' className='btn btn-outline-secondary me-4 fw-bold'>Register</Link>
              </form>

            </div>
          </nav>
        </header>

        <div className='p-5'>
          <h2 className='ms-5 mb-3 fw-bold'>Let's Explore Myanmar!</h2>
          <p className='text-center fw-bold'>
            You can plan your trips after creating an account. <Link to='/register' className='text-decoration-none'>Click Here</Link> to create an account.
          </p>
          <p className='text-center fw-bold'>or</p>
          <p className='text-center fw-bold'>
            Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link>
          </p>
        </div>
        
        <div>
          <p className='fixed-bottom text-center fw-semibold'>copyright &copy; 2024,Institute of Advanced Technologies | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default UnHome