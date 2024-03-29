import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from './LoginValidation'

function Login() {
    axios.defaults.withCredentials = true
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/home')
            } else {
                alert(res.data.Message);
            }
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='text-center fw-bold'>
            <h2 className='mb-3'>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3' onChange={handleInput}>
                    <input type='email' placeholder='Enter Email' name='email' className='form-control fw-bold' onChange={e => setValues({...values, email:e.target.value})} ></input>
                    <span className='text-danger'>{errors.email}</span>
                </div>

                <div className='mb-3' onChange={handleInput}>
                    <input type='password' placeholder='Enter Password' name='password' className='form-control fw-bold' onChange={e => setValues({...values, password:e.target.value})}></input>
                    <span className='text-danger'>{errors.password}</span>
                </div>

                <button type='submit' className='mb-3 btn btn-secondary w-100 rounded-pill fw-bold text-light'>Log In</button>
                
                <p className='mb-3'>OR</p>

                <div className='mb-3 me-3 ms-3'>
                    <p>Haven't Register yet? Go to <Link to='/register' className='text-decoration-none'>Register</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login