import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import UnHome from './UnHome';
import AdminProfile from './AdminProfile';
import Profile from './Profile';
import ManageAccount from './ManageAccount';
import AddNewUser from './AddNewUser'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UnHome/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/adminprofile' element={<AdminProfile/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/manageaccount' element={<ManageAccount/>}></Route>
          <Route path='/addnewuser' element={<AddNewUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
