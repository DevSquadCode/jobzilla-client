import React from 'react';
import seeker from '../../images/seeker.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div class='container background my-5'>
            <div class='row banner'>
                <div class='col-md-6'>
                    <div class='dream-job'>
                        <h1 style={{color: '#232763', fontWeight: 'bold'}}>Get Your Dream Job!</h1>
                    </div>

                    <div class="input-group mb-5">
                        <input id='solid' type="text" class="form-control" placeholder="Search Your Job Here" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button type="button" class="btn-color">Search</button>
                    </div>
                    
                </div>

                <div class='col-md-6 seeker-card'>
                <div className='seeker'>
                        <button type="button" class="seeker-button"><img class="seeker-employe" src={seeker} alt="job seeker image" width="100" height="100"/>JobSeeker</button>
                    </div>
                    <div className='employee'>
                        <button type="button" class="seeker-button"><img class="seeker-employe" src={seeker} alt="job seeker image" width="100" height="100"/>Employe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;