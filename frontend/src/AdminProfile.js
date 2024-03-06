
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link} from 'react-router-dom'

import logo from './Images/IATLogo.png'


//   const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8081/')
//             .then(res => setUsers(res.data))
//             .catch(err => console.log(err))
//     }, [])

function AdminProfile() {
 
  return (
    <div id='main'>
    <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <img src={logo} alt='IATLogo' width='150' height='50' className='ms-3'/>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link active ms-5 fw-bolder' style={{color: '#F171AB'}} href='/manageAccount'>Manage Accoounts</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ms-5 fw-bolder' id='des' href='/manageDestinations'>Manage Destinations</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    </header>

   
   

    <div>
        <Link className='text-black' to="/viewprofile"><i class="bi bi-person-circle" id='pro'></i></Link>
    </div>
    
    <div  className='wrapper'>            
    <div className='border border-secondary rounded'>
    <form className>
        <div className='input-group mb-3'>
            <label htmlFor='user' className='fw-bold'>User Name:</label>
        </div>

        <div className='input-group mb-3' >
            <label htmlFor='email' className='fw-bold'>Email:</label>
            
        </div>

        <div className='input-group mb-3' >
            <label htmlFor='role' className='fw-bold'>Gender: </label>
            
        </div>

        
    </form>
   
    </div>

    </div>
    <button type='submit'  className='btn rounded border border-secondary float-end fw-bold' id="bu" style={{background: 'rgb(200, 209, 218)'}}  >
                Edit your Profile Info
            </button>
    
    
    <p className='fixed-bottom bg-light mb-0 text-center color-dark p-2 fw-bold'>copyright &copy; 2024,Institute of Advanced Technologies | All Rights Reserved.</p>
</div>
  )
}

export default AdminProfile