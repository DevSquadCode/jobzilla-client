import React from "react";
import './Categories.css';

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Job Categories</h1>

        <div className="col-md-12 categories">

          <div className="col-md-3">
            <div class="card box-shadow">
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="icon">
                    <i className="fa fa-code"></i>
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
                <div className="icon">
                    <i className="fa fa-code"></i>
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
                <div className="icon">
                    <i className="fa fa-code"></i>
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
                <div className="icon">
                    <i className="fa fa-code"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Categories;
