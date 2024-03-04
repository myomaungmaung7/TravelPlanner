import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    gender: ''
  })
  const handleInput =  (event) => {
    setValues(prev => ({
      ...prev, [event.target.name]: [event.target.value]
    }))
  }
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "" && errors.gender === "") 
    {
      axios.post('http://localhost:8081/register', values)
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div>
        <h2 className='mb-3 fw-bold text-center'>Register Up Now</h2>
        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <input type='text' placeholder='Your Name' name='name' className='form-control fw-bold' onChange={handleInput}></input>
            <span className='text-danger'>{errors.name}</span>
          </div>

          <div className='mb-3'>
            <input type='email' placeholder='Your Email' name='email' className='form-control fw-bold' onChange={handleInput}></input>
            <span className='text-danger'>{errors.email}</span>
          </div>

          <div className='mb-3'>
            <input type='password' placeholder='Your Password' name='password' className='form-control fw-bold' onChange={handleInput}></input>
            <span className='text-danger'>{errors.password}</span>
          </div>

          <div className='mb-3'>
            <input type='password' placeholder='Re-enter Password' name='repassword' className='form-control fw-bold' onChange={handleInput}></input>
            <span className='text-danger'>{errors.repassword}</span>
          </div>

          <div className='mb-3'>
            <input type='radio' name='gender' value='Male' className='me-2' onChange={handleInput}></input>
            <label htmlFor='male' className='me-5'>Male <i class="bi bi-gender-male text-primary"></i></label>
            <input type='radio' name='gender' value='Female' className='me-2'  onChange={handleInput}></input>
            <label htmlFor='female' className='me-2'>Female <i class="bi bi-gender-female" id='female'></i></label>
            <p className='text-danger'>{errors.gender}</p>
          </div>

          <button type='submit' className='btn btn-secondary mb-3 w-100 rounded-pill fw-bold text-light'>Register</button>

          <div className='text-center'>
          <p  className='mb-2 fw-bold'>OR</p>
          </div>

          <div className='fw-bold'>
            <p>Already have an Account? Go to <Link to='/login' className='text-decoration-none'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register