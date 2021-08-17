import React from 'react';

const SingleJob = (props) => {

    const {name, title, jobType, deadline} = props.singleJob;
    // console.log(props.singleJob)
    return (
        <div class="cardList">
              <div class="cardList-body">
                <h3>{name}</h3>
                <h5 style={{fontWeight: 400}}>{title}</h5>
                <p>{jobType}</p>
              </div>
              <div className="card-apply text-center">
                <h5>Apply Now</h5>
                <p>Dead-line: {deadline}</p>
              </div>
            </div>
    );
};

export default SingleJob;