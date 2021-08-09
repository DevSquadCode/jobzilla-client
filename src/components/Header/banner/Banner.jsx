import React from 'react';
import bannerImg from '../../../images/banner.png';


const Banner = () => {
    return (
        <section className='py-3'>
            <div className="container py-5">
                <div className="row py-3">
                    <div className="col-md-4 py-2">
                        <input className='form-control' type="search" placeholder='Search Job' />
                    </div>
                    <div className="col-md-4 py-2">
                        <input className='form-control' type="search" placeholder='Job Location' />
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="input-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="1">Remote</option>
                                <option value="2">Full Time</option>
                                <option value="3">Part Time</option>
                            </select>
                            <button className="btn-brand">Search</button>
                        </div>
                    </div>
                </div>
                <div className="row flex-column flex-column-reverse flex-md-row text-center text-md-start">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 className='py-2 brand-text-color'>Find your Dream Job Here </h2>
                            <p className='text-secondary pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus fuga, nemo accusantium praesentium vel id quos quod voluptas distinctio!</p>
                            <button className="btn-brand-outline w-25 me-3">Find a Job</button>
                            <button className="btn-brand-outline w-25">Post a Job</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;