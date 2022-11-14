import React, { useContext } from 'react'
import "./Brand.css";
import { NavLink, useNavigate } from 'react-router-dom'
import AdminContext from '../../Context/adminContext';
import Search from '../../Search';
function ViewBrand() {

  let navigate = useNavigate();
  const context = useContext(AdminContext);
  const { brand, deleteBrand,getBrand } = context
  const handleEdit = (id) => {
    navigate(`/home/brand/edit-brand/${id}`)
  }
  const handledelete = async (id) => {
    await deleteBrand(id)
  }
  return (

    <div>
      <div className="comman_header">Home/Brand</div>
      <div className="d-flex justify-content-end me-2">
        <NavLink to="/home/brand/add-brand">
          <button type="button" class="btn btn-success">
            Add Brand
          </button>
        </NavLink>
      </div>
      <div className="comman ">
        <div className="comman_head">
          <h6>Brand </h6>
        </div>
        <div class="d-flex justify-content-end mt-5 m-3">
        <Search data = {getBrand} lable = {"Brand"}/>
        </div>
        <div className="m-3 table_responsive text-center order-table mx-auto">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                brand.length > 0 && brand.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.brand}</td>
                    <td>
                      <button type="button" class="btn btn-success" onClick={() => {
                        handleEdit(item._id)
                      }}>
                        Edit
                      </button>
                      <button type="button" class="btn btn-secondary ms-2" onClick={() => {
                        handledelete(item._id)
                      }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default ViewBrand