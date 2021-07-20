import React from 'react';
import banner from '../../images/banner.png'
import './Banner.css';

const Banner = () => {
    return (
        <div class='container background'>
            <div class='row'>
                <div class='col-md-6'>
                    <div class='dream-job'>
                        <h1>Get Your Dream Job!</h1>
                    </div>

                    <div class="input-group mb-3">
                        <input id='solid' type="text" class="form-control" placeholder="Search Your Job Here" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button type="button" class="btn-color">Primary</button>
                    </div>
                    
                </div>

                <div class='col-md-6'>
                    <img class='job-image' src={banner} alt="Job Banner"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;