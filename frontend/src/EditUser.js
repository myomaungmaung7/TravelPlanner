import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        alert(name + email + role)
        axios.put(`http://localhost:8081/edituser/` + id, {name, email, role})
        .then (res => {
            console.log(res);
            navigate('/manageaccount');
        })
        .catch (err => console.log(err));
    }

    function handleCancel(event) {
        event.preventDefault();
        navigate('/manageaccount');
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='border border-secondary p-5'>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3' onChange={e => setName(e.target.value)}>
                    <label htmlFor='name' id='right' className='fw-bold'>Name:</label>
                    <input type='text' placeholder='User Name' className='form-control rounded fw-bold'></input>
                </div>

                <div className='input-group mb-3' onChange={e => setEmail(e.target.value)}>
                    <label htmlFor='email' id='right' className='fw-bold'>Email:</label>
                    <input type='email' placeholder='Email' className='form-control rounded fw-bold'></input>
                </div>

                <div className='mb-3' onChange={e => setRole(e.target.value)}>
                    <label htmlFor='role' id='right' className='fw-bold'>Role:</label>
                    <select className='border border-secondary rounded text-secondary fw-bold'>
                        <option className='fw-bold'>SELECT A ROLE</option>
                        <option value='Admin' className='fw-bold'>Admin</option>
                        <option value='User' className='fw-bold'>User</option>
                    </select>
                </div>
                
                <div>
                    <button type='submit' className='btn btn-secondary rounded border border-secondary fw-bold' onClick={handleCancel}>Cancel</button>
                    <button type='submit' className='float-end btn btn-secondary rounded border border-secondary fw-bold'>Confirm</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser