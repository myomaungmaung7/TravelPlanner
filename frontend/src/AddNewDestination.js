import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/IATLogo.png'

function AddNewDestination() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <img src={logo} alt='IATLogo' width='150' height='50'/>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/home' className='nav-link ms-5 fw-bold' style={{color: '#F171AB'}}>Manage Accounts</Link>
                </li>

                <li className='nav-item'>
                  <Link to='#' className='nav-link ms-3 fw-bold' id='link'>Manage Destinations</Link>
                </li>
              </ul>
            </div>
            <div className='me-3'>
              <Link to='/profile'><i class="bi bi-person-circle" id='profile'></i></Link>
            </div>
          </div>
        </nav>

        <div className='d-flex justify-content-center align-items-center bg-white bg-opacity-50 vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Your Name' name='name' className='form-control rounded-0'></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' className='form-control rounded-0' name='email'></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0'></input>
                </div>

                <button  className='btn btn-primary w-100 rounded-0' type='submit'>Add</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddNewDestination