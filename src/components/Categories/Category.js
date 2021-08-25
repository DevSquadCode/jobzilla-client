import React from 'react';

const Category = (props) => {

  const { title, vacancy, logo } = props.categoryData;

  return (
    <div className="col-md-3 pb-4">
      <div class="card h-100 p-2 custom-card">
        <div class="card-body">
          <div className="icons">
            <img src={logo} style={{ width: '70px', height: '70px', borderRadius: '50%' }} alt="" />
          </div>
          <h4>{title}</h4>
          <small>{vacancy} Jobs Available</small>
        </div>
      </div>
    </div>
  );
};

export default Category;