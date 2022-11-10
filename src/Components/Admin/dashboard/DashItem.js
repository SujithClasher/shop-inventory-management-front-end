import React from "react";

const DashItem = ({value}) => {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card  h-100 py-2`} style={{backgroundColor:value.color}}>
          <div className="card-body" style={{backgroundColor:value.color}}>
            <div >
              <div>
                <div className="text-white mb-1">
                  {value.title}
                </div>
                <div className="h5 mb-0 ">
                  {value.value}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${value.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashItem;