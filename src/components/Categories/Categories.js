import React from "react";
import './Categories.css';

const Categories = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Job Categories</h1>
      <br />
      <div className="row">

        <div className="col-md-3">
            <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icons">
                    {/* <i className="fa fa-code"></i> */}
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icons">
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icons">
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icons">
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Categories;
