import React from 'react'
import './Orders.css'
function Orders() {
  return (
    <div>
      <div className="comman_header">Home/Orders</div>
      <div className="comman">
        
        <div className="comman_head">
          <h6>Orders Table </h6>
        </div>
        <div className="d-flex justify-content-end mt-5 m-3 ">
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2 me-2 shadow-none"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success  my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="m-3 table_responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order Date</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Total Order</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>view</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders