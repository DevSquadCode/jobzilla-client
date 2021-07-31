import React from 'react';

const SingleJob = (props) => {

    const {title, type, logo} = props.singleJob;
    console.log(props.singleJob)
    return (
        <div class="cardList">
              <div class="cardList-body">
                <div className="icon">
                <img src={logo} style={{width: '70px', height: '70px', borderRadius: '50%'}} alt="" />
                </div>
                <h4>{title}</h4>
                <p>{type}</p>
              </div>
              <div className="card-apply text-center">
                <h5>Apply Now</h5>
                <p>Date line: 31 Jan 2021</p>
              </div>
            </div>
    );
};

export default SingleJob;