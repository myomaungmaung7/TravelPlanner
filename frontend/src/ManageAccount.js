import React, { useEffect, useState } from 'react'
import logo from './Images/IATLogo.png'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

function ManageAccount() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <header className='sticky-top'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <img src={logo} alt='IATLogo' width='150' height='50' className='ms-3 me-5'></img>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/manageaccount' className='nav-link active fw-bolder ms-5' style={{color: '#F171AB'}}>Manage Accounts</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/managedestination' className='nav-link fw-bolder ms-5' id='des'>Manage Destinations</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to='/profile'><i class="bi bi-person-circle" id='profile'></i></Link>
                    </div>
                </div>
            </nav>
        </header>
        <div className='p-5'>
            <button className='btn btn-secondary rounded-pill mb-3'>
                <Link to='/addminprofile' className='text-decoration-none text-light'>
                    <i class="bi bi-arrow-left-short"></i>Back
                </Link>
            </button>
            <button className='btn btn-secondary rounded float-end mb-3'>
                <Link to='/addnewuser' className='text-decoration-none text-light'>
                    <i class="bi bi-plus"></i>AddNewUser
                </Link>
            </button>
            <div className='mt-2'>
                <table className='table table-striped table-light table-bordered border-secondary'>
                    <thead>
                        <tr>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                            <th colSpan={3} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(users).map((user, i) =>(
                        <tr key={i}>
                            <td className='text-center'>{user.user_name}</td>
                            <td className='text-center'>{user.email}</td>
                            <td className='text-center'>{user.role}</td>
                            <td className='text-center'>
                                <button className='btn btn-primary'><i class="bi bi-eye-fill"></i></button>
                            </td>
                            <td className='text-center'>
                                <button  className='btn btn-success'><i class="bi bi-person-fill-gear"></i></button>
                            </td>
                            <td className='text-center'>
                                <button className='btn btn-danger'><i class="bi bi-trash3-fill"></i></button>
                            </td>
                        </tr>
                       ))} 
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <p className='text-center m-0 fw-bold'>copyright &copy; 2024,Intitute of Advanced Technologies | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default ManageAccount