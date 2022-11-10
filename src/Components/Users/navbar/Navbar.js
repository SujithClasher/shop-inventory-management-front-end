import React, { useState } from 'react'
import './Navbarz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <nav>
        <div className='nav_left'>
          <h5>Shop Inventory Management</h5>

        </div>
        <div className='nav_right' id={open ? null : "hide"} >
          <div className='d-flex justify-content-center align-items-center '>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" srcset="" width="35px" height="35px"/>
          </div>
          <h5 className='me-2'>User</h5>
          <div onClick={closeMenu}>
            <h5
            onClick={() => {
              navigate("/");
            }}>Logout</h5>
          </div>
        </div>

        <div className='menu_icon' onClick={handleClick}>
          <span>  {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />} </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar