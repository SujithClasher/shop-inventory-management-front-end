import React,{ useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import AdminContext from '../../Context/adminContext';
function OneViewproduct() {
  const params = useParams();
  const context = useContext(AdminContext);
  const { products } = context
  let viewProducts = products.find((item) => item._id === params.id);

  let image = viewProducts.productImage;
  let img = "https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"
  return (
    <div className="container">
      <div className="comman_header">Home/Products/View products</div>
      <div className="comman">

        <div className="comman_head">
          <h6>View Products </h6>
        </div>
        <div className='w-75 mx-auto p-4 '>
          <form>


            <div className="container">
              <div className="row">

                <div className=' col-sm-12 col-md-6'>
                  <div class="text-center">
                    <img src={image ? image : img} class="rounded" alt="img" width="250px" height="250px" />

                  </div>
                </div>

                <div className='col-sm-12 col-md-6'>
                  <div class="form-group">
                    <label>Brand</label>
                    <input type="text" class="form-control shadow-none" value = {viewProducts.brand} readonly/>
                  </div>
                  <div class="form-group">
                    <label className='siva'>Category</label>
                    <input type="text" class="form-control shadow-none"  value = {viewProducts.category} readonly/>
                  </div>
                  <div class="form-group">
                    <label >Product</label>
                    <input type="text" class="form-control shadow-none"  value = {viewProducts.product} readonly/>

                  </div>
                  <div class="form-group">
                    <label >Rate</label>
                    <input type="text" class="form-control shadow-none"  value = {viewProducts.rate} readonly/>

                  </div>
                  <div class="form-group">
                    <label >Quantity</label>
                    <input type="text" class="form-control shadow-none"  value = {viewProducts.quantity} readonly/>

                  </div>
                  <NavLink to='/home/products'> <button type="submit" class="btn btn-secondary mt-3 ms-3">Back</button></NavLink>
                </div>
              </div>
            </div>



          </form>
        </div>

      </div>
    </div>
  )
}

export default OneViewproduct