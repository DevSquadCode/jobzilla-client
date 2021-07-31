import React, { useEffect } from "react";
import { useState } from "react";
import './Categories.css';
import Category from "./Category";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-cove-89051.herokuapp.com/jobcategories')
        .then(res => res.json())
        .then(data => setCategories(data)) 
}, [])

// console.log(categories)

  return (
    <div className="container mt-5 text-center">
      <h1>Job Categories</h1>
      <br />
      <div className="row">

          {
            categories.map(categoryData => <Category categoryData={categoryData} key={categoryData._id}></Category>)
          }
            {/* <div class="card box-shadow">
              <div class="card-body">
                <div className="icons">
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div> */}


          {/* <div className="col-md-3">
            <div class="card">
              <div class="card-body">
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
                <div className="icons">
                    <i className="fa fa-code fa-2x"></i>
                </div>
                <h4>Web & Software</h4>
                <small>120 Jobs Available</small>
              </div>
            </div>
          </div> */}

      </div>
    </div>
  );
};

export default Categories;
