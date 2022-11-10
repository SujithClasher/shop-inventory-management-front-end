import React,{ useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AdminContext from '../../Context/adminContext';

function NavItems({values}) {
  const context = useContext(AdminContext);
  const { setOpen } = context;
  const closeMenu = () => setOpen(false);
    const navLinkStyle = { color: 'red' }
  return (
    <>
       <NavLink to={values.to} style={({ isActive }) => isActive ? navLinkStyle : null}  onClick={closeMenu}>{values.menuName}</NavLink>
    </>
  )
}

export default NavItems