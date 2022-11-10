import React, { useContext } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import AdminContext from '../../Context/adminContext';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  let navigate = useNavigate();
  const context = useContext(AdminContext);
  const { open, setOpen } = context;
  const handleClick = ()=> setOpen(!open);

  return (
    <nav>
        <div className='nav_left'>
           <h5>Shop Inventory Management</h5>
        </div>
        <div className='nav_right'>
          <h4>
            Admin
          </h4>
        <h4
            onClick={() => {
              navigate("/");
            }}>Logout</h4>
        </div>
     
         <div className='menu_icon' onClick={handleClick}>
         <span>  {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />} </span>
         </div>
    </nav>
  )
}

export default Navbar