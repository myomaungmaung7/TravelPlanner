import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/IATLogo.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AddNewDestination() {

  const [name, setName] = useState('');
  const [division, setDivision] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

   const handleFile1 = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleFile2 = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('name', name);
    formData.append('division', division);
    formData.append('description', description);

    axios.post('http://localhost:8081/upload', formData)
    .then(res => {
        if (res.data.Status === "Success") {
            console.log("Succeeded");
        } else {
            console.log("Failed");
        }
    })
    .catch(err => console.error(err));
}


  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <img src={logo} alt='IATLogo' width='150' height='50'/>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/manageaccount' className='nav-link ms-5 fw-bold' style={{color: '#F171AB'}}>Manage Accounts</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/managedestination' className='nav-link ms-3 fw-bold' id='link'>Manage Destinations</Link>
                </li>
              </ul>
            </div>
            <div className='me-3'>
              <Link to='/profile'><i class="bi bi-person-circle" id='profile'></i></Link>
            </div>
          </div>
        </nav>

        <button className='btn btn-secondary rounded-pill mt-3'>
                <Link to='/addminprofile' className='text-decoration-none text-light'>
                    <i class="bi bi-arrow-left-short"></i>Back
                </Link>
            </button>

        <div className='d-flex justify-content-center align-items-center bg-white bg-opacity-10 vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action=''>
            <label><strong>Heading Image : </strong></label>
            <input type="file" onChange={handleFile1} />

                <div className='mb-3'>
                    <label htmlFor='name'><strong>Destination Name</strong></label>
                    <input type='text' name='name' className='form-control rounded-0' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='division'><strong>Division Name</strong></label>
                    <input type='text' name='division' className='form-control rounded-0' value={division} onChange={(e) => setDivision(e.target.value)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='description'><strong>Description</strong></label>
                    <textarea type='text' name='description' rows='5' cols='44' className='form-control rounded-0' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <label><strong>Side Image : </strong></label>
                <input type="file" onChange={handleFile2} className='mb-3'/>

                <button type='submit' className='btn btn-secondary mb-3 w-100 rounded-pill fw-bold text-light' onClick={handleUpload}>Add</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddNewDestination