import React,{ useContext } from "react";
import AdminContext from "../../../Context/adminContext";
import "./Inventory.css";
function Inventory() {
  const context = useContext(AdminContext);
  const { dashboardProduct } = context;
  return (
    <div className="mx-auto">
      <div className="comman_header">Dashboard/Inventory</div>

      <div className="comman mt-5">
        <div className="comman_head">
          <h6>Inventory </h6>
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
          <table className="table table-bordered  text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Bought</th>
                <th scope="col">Sold</th>
                <th scope="col">Available in Stock</th>
              </tr>
            </thead>
            <tbody>

              {
                dashboardProduct.length > 0 && dashboardProduct.map((item, index) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.product}</td>
                    <td>{item.bought}</td>
                    <td>{item.sold}</td>
                    <td>{item.avaliableStock}</td>
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

export default Inventory;
