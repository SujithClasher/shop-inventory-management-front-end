import React,{ useContext } from 'react';
import AdminContext from '../Context/adminContext';
import './Invoice.css';

function Invoice() {
    const context = useContext(AdminContext);
    const { orders } = context;
const { order,payment,customer } = orders
const {customerMobile,customerName,orderDate}= customer
    console.log(orders);
  return (
    <>
    <div class="container ">

<div class="page-header">
    <h1>Invoice Template  </h1>
</div>


<div class="container ">
    <div class="row ">
        <div class="col-md-6 col-md-offset-3 body-main sss">
            <div class="col-md-12">
               <div class="row">
                    <div class="col-md-8 col-xl-9">
                        <img class="img" alt="Invoce Template" src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG59.png" />
                    </div>
                    <div class="col-md-4 col-xl-3 text-right">
                        <h4 style={{olor: "#F81D2D"}}><strong>Siva</strong></h4>
                        <p className='size'>1st' Steet ,Ram Backery</p>
                        <p className='size'>1833-244-124</p>
                        <p className='size'>siva@gmail.com</p>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2>INVOICE</h2>
                        
                    </div>
                </div>
                <br />
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th><h5>Description</h5></th>
                                <th><h5>Rate</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Amount</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        {
    order.length > 0 && order.map((item,index)=>{
         return <tr key={index}>
         <td class="col-md-9">{item.product}</td>
         <td class="col-md-9">{item.rate}</td>
         <td class="col-md-9">{item.quantity}</td>
         <td class="col-md-3">{item.total} </td>
     </tr>
    })
}
                            <tr>
                                <td class="text-right">
                               
                                <p>
                                    <strong>Total Amount </strong>
                                </p>
                                <p>
                                    <strong> GST 18% </strong>
                                </p>
							    <p>
                                    <strong>Discount  10%</strong>
                                </p>
							    <p>
                                    <strong>Payable Amount</strong>
                                </p>
							    </td>
                                <td></td>
                                <td></td>
                                <td>
                               
                                <p>
                                    <strong>{payment.Amount} </strong>
                                </p>
                                <p>
                                    <strong> {payment.Gst}</strong>
                                </p>
                                <p>
                                    <strong> {payment.Discount}</strong>
                                </p>
                                <p>
                                    <strong>{payment.Total} </strong>
                                </p>
							    </td>
                            </tr>
                            <tr style={{color: "#F81D2D"}}>
                                <td class="text-right"><h4><strong>Total:</strong></h4></td>
                                <td></td>
                                <td></td>
                                <td class="text-left"><h4><strong> {payment.Total} </strong></h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                   <div className="constainer">
                    <div className="row">
                    <div class="col-md-10">
                        
                        <p className='size'><b>Customer : </b>{customerName}</p>
                       
                        <p className='size'><b>Mobile Number : </b>{customerMobile}</p>
                        
                        <p className='size'><b>Date : </b>{orderDate}</p>
                        
                    </div>
                    <div class="col-md-2">
                        
                        <p><b>Signature</b></p>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default Invoice