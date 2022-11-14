import React from 'react'
import{NavLink} from 'react-router-dom'

function ViewAllcustomer() {
  return (
    
    <div>
    <div className="comman_header">Home/Customers</div>
   
    <div className="comman">
      
      <div className="comman_head">
        <h6>Customers Info </h6>
      </div>
      <div class="d-flex justify-content-end mt-5 m-3 ">
        <form class="form-inline d-flex">
          <input
            class="form-control mr-sm-2 me-2 shadow-none"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-outline-success  my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="m-3 table_responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customers Name</th>
              <th scope="col">Customer Type</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
             
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td> <NavLink to='/home/customers/view-onecustomer'> <button type="submit" class="btn btn-success ms-3">View</button> </NavLink> </td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default ViewAllcustomer