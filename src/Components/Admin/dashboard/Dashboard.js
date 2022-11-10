import React,{ useContext } from "react";
import "./Dashboard.css";
import Inventory from './inventory/Inventory';
import DashItem from "./DashItem";
import AdminContext from "../../Context/adminContext";
function Dashboard() {
  const context = useContext(AdminContext);
  const {dashboardOverview } = context;
  const data = [
    {
      title: "Total Products",
      value: dashboardOverview.totalProducts,
      color:"#009A6A",
      theam: "primary",
      icon: "fa-calendar",
    },
    {
      title: "Products Bought",
      value: dashboardOverview.bought,
      color:"#68BC76",
      theam: "success",
      icon: "fa-dollar-sign",
    },
    {
      title: "Sold",
      value: dashboardOverview.sold,
      color:"#880262",
      theam: "warning",
      icon: "fa-comments",
    },
    
    { title: "Out Of Stock",
     value: dashboardOverview.outOfStock,
     color:"#F16D69",
      theam: "info",
       icon: "fa-clipboard-list" },
    {
      title: "Available Stock",
      value: dashboardOverview.totalAvaliableStock,
      color:"#B266F8",
      theam: "warning",
      icon: "fa-comments",
    },
   
  ];
  return (
    <>
      <div className="p-3">
      <div className="comman_header">Dashboard/Overview</div>
        
        <div className="row p-2">
          {data.length > 0 &&  data.map((val, i) => {
            return <DashItem value={val} key={i}></DashItem>;
          })}
        </div>
        <div>
          <Inventory/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
