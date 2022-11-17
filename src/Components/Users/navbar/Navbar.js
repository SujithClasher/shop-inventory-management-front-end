import React, { useState, useContext } from 'react'
import './Navbarz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../Context/usercContext'


function Navbar() {
  const context = useContext(UserContext)
  const { username } = context
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <nav>
        <div className='nav_left'>
          <h5><span className='hed'>Shop Inventory Management</span></h5>

        </div>
        <div>

        </div>

        <div className='nav_rights' id={open ? null : "hides"} >
          <h5 className='me-2'>User : {username ? username : window.localStorage.getItem("name")}</h5>
          <div onClick={closeMenu}>
         <h6  onClick={() => {
              navigate("/user-portal");
            }} >Home</h6> 
         </div>
          <div onClick={closeMenu}>
            <h6 onClick={() => {
              navigate("/user-portal/your-order");
            }} > Your Order</h6>
          </div>
          <div className='d-flex justify-content-center align-items-center ' onClick={closeMenu}>
            <h6 onClick={() => {
              navigate("/user-portal/profile-page");
            }} >Profile</h6>
          </div>
          <div onClick={closeMenu}>
            <h6
              onClick={() => {
                window.localStorage.removeItem("token")
                window.localStorage.removeItem("name")
                window.localStorage.removeItem("isAdmin")
                window.localStorage.removeItem("userId")
                navigate("/");
              }}>Logout</h6>
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