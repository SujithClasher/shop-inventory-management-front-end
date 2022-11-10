import React from 'react'
import './OrderSuccess.css';
import { useNavigate } from 'react-router-dom';
function OrderSuccess() {
    let navigate = useNavigate();

  return (
 <>
 <div className='ff'>
 <div class="card">
      <div className='ss'>
        <span class="checkmark">✓</span>
      </div>
        <h1 className='h1'>Success</h1> 
       <button className='ww' onClick={()=>{
        navigate('/user-portal/order-success/invoice')
       }} > Print Invoice</button>
       <button className='ww' onClick={()=>{
        navigate('/user-portal')
       }}>Add New Order</button>
      </div>
 </div>
 </>
  )
}

export default OrderSuccess