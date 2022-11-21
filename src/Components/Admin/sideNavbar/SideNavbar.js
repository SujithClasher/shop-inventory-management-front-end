import React from "react";
import "./SideNavbar.css";
import NavItems from "./NavItems";
import {faGaugeHigh,faPalette,faUser,faRightFromBracket,faListCheck,faInbox} from '@fortawesome/free-solid-svg-icons'
function SideNavbar() {  
  const data = [
    {
      menuName: "Dashboard",
      to: "/home",
      icon:faGaugeHigh,
    },
    {
      menuName: "Brand",
      to: "/home/brand",
      icon:faPalette,
    },
    {
      menuName: "Category",
      to: "/home/category",
      icon:faListCheck,
    },
    {
      menuName: "Products",
      to: "/home/products",
      icon:faInbox,
    },
    {
      menuName: "Users",
      to: "/home/users",
      icon:faUser,
    },
    {
      menuName: "Logout",
      to: "/",
      icon:faRightFromBracket,
    },
  ];
  return (
    <div className="sidebar">
      <div>
        {data.length > 0 &&
          data.map((val, index) => {
            return <NavItems values={val} key={index} />;
          })}
      </div>
    </div>
  );
}

export default SideNavbar;
