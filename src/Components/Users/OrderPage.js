import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import './OrderPage.css'
import AdminContext from '../Context/adminContext';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
  let navigate = useNavigate()
  const [order, setOrder] = useState([])
  const [customerDetail,SetCustomerDetail] = useState({});
  const context = useContext(AdminContext);
  const [payment,setPayment] = useState({});
  const { products,setOrders } = context


  const formiks = useFormik({
    initialValues: {
      orderDate:  new Date().toLocaleDateString("de-DE"),
      customerName: "",
      customerMobile: "",

    },
    validate: (values) => {
      const errors = {};
      if (values.orderDate === 0) {
        errors.orderDate = "Enter your Order Date";
      }
      if (values.customerName.length === 0) {
        errors.customerName = "Enter Customer Name";
      }
      function validateMobile(mobilenumber) {
        // var mob_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        var regmm = "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$";
        var regmob = new RegExp(regmm);
        if (values.customerMobile.length === 0) {
          return (errors.customerMobile = "Enter your mobile number");
        }
        if (regmob.test(mobilenumber)) {
          return errors;
        } else {
          return (errors.customerMobile = "Please provide a valid mobile number");
        }
      }

      validateMobile(values.customerMobile);
      return errors;
    },

    onSubmit: async (values) => {
      SetCustomerDetail(values)
    },
  });

  const formik = useFormik({
    initialValues: {
      product_id: "",
      quantity: "",

    },
    validate: (values) => {
      const errors = {};
      if (values.product_id.length === 0) {
        errors.product_id = "Enter your Product";
      }
      if (values.quantity.length === 0) {
        errors.quantity = "Enter your quantity";
      }
      return errors;
    },

    onSubmit: async (values) => {
      formik.resetForm()
      cart(values)
    },
  });

  const cart = (data) => {

    const { quantity, product_id } = data;
    let pName = products.find((item) => item._id === product_id);
    let value = {
      id: pName._id,
      product: pName.product,
      rate: pName.rate,
      quantity,
      total: pName.rate * quantity,
    }
    
    setOrder([...order, value])
    
  }

  const handleRemove = (index) => {
    const values = [...order];
    values.splice(index, 1);
    setOrder(values);
  }

  useEffect(()=>{
    totalAmount()
  },[order])

  const totalAmount = async()=>{
     const amount = ()=>{
            let value = order.length > 0 && order.map((item)=> item.total).reduce((initialValue,currentValue)=> initialValue + currentValue);
       return value;
     }
     const gst = (quantity, percent)=>{
      let value = (quantity * percent) / 100;
      return value;
     };
      const discount = (quantity, percent)=>{
        let value = (quantity * percent) / 100;
      return value;
      }

 let Amount =  await amount();
  let Gst =  await gst(Number(Amount),18);
  let Discount = await discount(Number(Amount),10);
  console.log(order);
let payment = {

  Amount,
  Gst,
  Discount,
  Total: Amount+Gst-Discount
  
}
setPayment(payment);
  }
  const placeOrder = (customer,order,payment)=>{
 
    let orderDetails; 
    if(Object.keys(customer).length && order.length > 0){
            orderDetails = {
              customer,
              order,
              payment
            }
            setOrders(orderDetails)
            navigate("/user-portal/razorpay")
            
            
            
    }else{
      alert("enter customer || product")
    }
    console.log(orderDetails);
  }

  
  
  return (
    <div className='order-page' >
      <h6>New Order</h6>
      <div className="content">

        <div className='d-flex justify-content-evenly mx-auto w-75'>
          <div className=' w-25' >
        <form onSubmit={(values) => {
              formiks.handleSubmit(values);
            }}>
              
        <div class="form-group">
              <label for="exampleInputEmail1">Order Date</label>
              <input type="text" class="form-control" id="exampleInputEmail1"
              value={new Date().toLocaleDateString("de-DE")}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="orderDate"  readOnly/>
                    {formiks.touched.orderDate && formiks.errors.orderDate ? (
                  <div className="error"> {formiks.errors.orderDate}</div>
                ) : null}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Customer Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Customer Name"
                  value={formiks.values.customerName}
                  onChange={formiks.handleChange}
                  onBlur={formiks.handleBlur}
                  name="customerName" />
                    {formiks.touched.customerName && formiks.errors.customerName ? (
                  <div className="error"> {formiks.errors.customerName}</div>
                ) : null}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Mobile Number</label>
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Customer Mobile Number"
              value={formiks.values.customerMobile}
                  onChange={formiks.handleChange}
                  onBlur={formiks.handleBlur}
                  name="customerMobile" />
                    {formiks.touched.customerMobile && formiks.errors.customerMobile ? (
                  <div className="error"> {formiks.errors.customerMobile}</div>
                ) : null}
            </div>
            <button type="submit" class="btn btn-success mt-3">Save</button>
        </form>
        </div>
          <div className=' w-25' >
            <form onSubmit={(values) => {
              formik.handleSubmit(values);
            }}>
              <div class="form-group">
                <label>Product</label>
                <select className="form-select shadow-none" value={formik.values.product_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="product_id">
                  <option selected value="Default">Select a product</option>
                  {
                    products.length > 0 && products.map((item, index) => {
                      return <option key={index} value={item._id}>{item.product}</option>
                    })
                  }
                </select>
                {formik.touched.product_id && formik.errors.product_id ? (
                  <div className="error"> {formik.errors.product_id}</div>
                ) : null}
              </div>
              <div class="form-group">
                <label >Quantity</label>
                <input type="number" class="form-control shadow-none" placeholder="Enter your quantity" value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="quantity" />
                {formik.touched.quantity && formik.errors.quantity ? (
                  <div className="error"> {formik.errors.quantity}</div>
                ) : null}
              </div>
              <button type="submit" class="btn btn-success mt-3">Add</button>
            </form>
          </div>
          <div>
          </div>
        </div>
        <div className=" table_responsive order-table">
          <h4>Make Product List</h4>
          <table className="table table-bordered  text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Rate</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                order.length > 0 && order.map((item, index) => {
                  return <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{item.product}</th>
                    <th>{item.rate}</th>
                    <th>{item.quantity}</th>
                    <th>{item.total}</th>
                    <th><button onClick={() => handleRemove(index)} class="btn btn-danger mt-3">Delete</button></th>
                  </tr>
                })
              }


            </tbody>
          </table>
        </div>
        <div className='w-50 mx-auto'>

          <div class="form-group">
            <label for="exampleInputEmail1">Sub Total</label>
            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" value={  payment ? (payment.Amount === false ? `Rs : ${0}` : `Rs : ${payment.Amount}`  ): null} readOnly/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">GST (18%)</label>
            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" value={ payment ? `Rs : ${payment.Gst}`:null}  readOnly/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Discount (10%)</label>
            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" value={ payment ? `Rs : ${payment.Discount}`:null}  readOnly/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Net Total</label>
            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" value={ payment ? `Rs : ${ payment.Total}`:null}  readOnly/>
          </div>
        </div>

        <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
          <button type="button" onClick={()=>placeOrder(customerDetail,order,payment)} class="btn btn-success">Place Order</button>
        </div>

      </div>
    </div>
  )
}

export default OrderPage