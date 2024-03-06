import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddNewUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/addnewuser', {name,email,password,role,gender})
            .then(res => {
                console.log(res);
                navigate('/manageaccount');
            })
            .catch(err => console.log(err));
    }

    function handleCalcel(event) {
        event.preventDefault();
        navigate('/manageaccount');
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='border border-secondary rounded p-5'>
            <form onSubmit={handleSubmit}>
                <div  className='input-group mb-3' onChange={e => setName(e.target.value)}>
                    <label htmlFor='name' className='fw-bold' id='right'>Name:</label>
                    <input type='text' placeholder='User Name' name='name' className='form-control rounded fw-bold'></input>
                </div>

                <div className='input-group mb-3' onChange={e => setEmail(e.target.value)}>
                    <label htmlFor='email' className='fw-bold' id='right'>Email:</label>
                    <input type='email' placeholder='Email' name='email' className='form-control rounded fw-bold'></input>
                </div>

                <div className='input-group mb-3' onChange={e => setPassword(e.target.value)}>
                    <label htmlFor='password' className='fw-bold' id='right'>Password:</label>
                    <input type='password' placeholder='Password' name='password' className='form-control rounded fw-bold'></input>
                </div>

                <div className='mb-3' onChange={e => setRole(e.target.value)}>
                    <label htmlFor='role' className='fw-bold' id='right'>Role:</label>
                    <select name='role' id='role' className='border border-secondary text-secondary rounded fw-bold'>
                        <option className='fw-bold'>SELECT A ROLE</option>
                        <option value='Admin' className='fw-bold'>Admin</option>
                        <option value='User' className='fw-bold'>User</option>
                    </select>
                </div>

                <div className='mb-3 text-center' onChange={e => setGender(e.target.value)}>
                    <input type='radio' name='gender' value='Male' className='me-2'></input>
                    <label htmlFor='male' className='me-2 fw-bold'>Male</label>
                    <input type='radio' name='gender' value='Female' className='me-2'></input>
                    <label htmlFor='female' className='fw-bold'>Female</label>
                </div>

                <div>
                    <button type='submit' className='btn btn-secondary rounded-pill border border-secondary fw-bold' onClick={handleCalcel}>Cancel</button>
                    <button type='submit' className='btn btn-secondary rounded-pill border border-secondary fw-bold float-end'>Add</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default AddNewUser