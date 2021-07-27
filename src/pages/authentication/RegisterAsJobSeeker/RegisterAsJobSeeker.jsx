import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import registerBanner from '../../../images/undraw_unlock_24mb.svg';



const RegisterAsJobSeeker = () => {





    
    return (
        <section>
            <Header />
            <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
                        <h3>Create Your Account</h3>
                        <div className="p-2 w-75">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control py-" id='email' placeholder='Name@example.com' />
                        </div>
                        <div className="p-2 w-75">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control py-2" id='password' placeholder="Enter Your Secret Code" />
                        </div>
                        <div className="p-2 w-75">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className='form-control py-2' id='firstName' placeholder='John'/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className='form-control py-2' id='lastName' placeholder='Doe'/>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">By registering, you agree to our <span><a href="/">Terms & Conditions.</a></span></p>
                        <button className="btn btn-outline-info w-50">Register Now</button>
                        <div className="w-75 text-center py-3">
                            <p>
                                Have an Account ? Please <Link to="/login">
                                    <button className='btn text-info border'>
                                        Login                                        
                                    </button>
                                </Link>                
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src={registerBanner} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default RegisterAsJobSeeker;