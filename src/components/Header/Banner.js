import React from 'react';
import banner from '../../images/banner.jpg';
import bannerStyle from './Banner.module.css';



const Banner = () => {
    const {
        dreamJob, 
        btnColor, 
    } = bannerStyle;


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className={dreamJob}>
                        <h1>Get Your Dream Job!</h1>
                    </div>

                    <div className='input-group mb-3'>
                        <input type="text" className="form-control rounded p-2" placeholder="Search Your Job Here" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button type="button" className={`${btnColor} btn btn-outline-info rounded`}>Primary</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={banner} alt="Job Banner" width="500" height="500"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;