import React from 'react';

const Category = (props) => {

    const {title, vacancy, logo} = props.categoryData;
    console.log(props.categoryData)
    return (
           <div className="col-md-3">
             <div class="card box-shadow">
              <div class="card-body">
                <div className="icons">
                <img src={logo} style={{width: '70px', height: '70px', borderRadius: '50%'}} alt="" />
                </div>
                <h4>{title}</h4>
                <small>{vacancy} Jobs Available</small>
              </div>
            </div> 
           </div>
    );
};

export default Category;