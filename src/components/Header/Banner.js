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
                        <button type="button" class="btn-color">Search</button>
                    </div>
                    
                </div>

                <div class='col-md-6 job-button'>
                    <div class='col-md-3 seeker'>
                        <button type="button" class="seeker-button"><image src=""></image>I am Job Seeker</button>
                    </div>
                    <div class='col-md-3 employe'>
                        <button type="button" class="seeker-button">I am Employe</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;