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

  return (
    <div className="container mt-5 text-center">
      <h3 className='text-brand text-uppercase'>Job Categories</h3>
      <br />
      <div className="row">

          {
            categories.map(categoryData => <Category categoryData={categoryData} key={categoryData._id}></Category>)
          }
            
      </div>
    </div>
  );
};

export default Categories;
