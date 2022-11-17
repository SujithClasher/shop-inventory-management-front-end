import React,{ useContext } from "react";
import AdminContext from "../../../Context/adminContext";
import Search from "../../../Search";
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
        <div className="d-flex justify-content-end mt-5 m-3 ">
        <Search data={ "" } lable={"Products"}/>
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
                    <td >{index + 1}</td>
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
