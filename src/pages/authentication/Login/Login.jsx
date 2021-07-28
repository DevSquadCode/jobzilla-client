import React, {useState} from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import loginBanner from '../../../images/undraw_unlock_24mb.svg';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {useHistory} from 'react-router-dom';


firebase.initializeApp(firebaseConfig);




const Login = () => {

    // const [user, setUser] = useState();
    const history = useHistory();

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            history.push('/home')
        })
        .catch(err => {
            console.log(err);
            
        })
    }
    return (
        <section className=''>
            <Header />
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
                        <h3>Enter Your Credential</h3>
                        <div className="w-75 py-2">
                            <HiOutlineMail className='fs-3 my-2 text-info' />
                            <label htmlFor="email" className='px-2'>Email</label>
                            <input type="email" className="form-control py-3 d-block" placeholder='John@Example.com' />
                        </div>
                        <div className="w-75 py-2">
                            <RiLockPasswordLine className='fs-3 my-2 text-info' />
                            <label htmlFor="email" className='px-2'>Password</label>
                            <input type="password" className="form-control py-3" placeholder="Must be atleast 6 Characters" />
                        </div>
                        <button className="btn btn-outline-info w-50 mt-2">Login</button>
                        <button className="btn btn-outline-info w-50 mt-2" onClick={handleSignIn}>Login With Google</button>
                        <div className="w-75 text-center py-3">
                            <p>New to Job-Zilla ?</p>
                            <div className="d-flex justify-content-evenly">
                                <Link to='/register/recruiter'>
                                    <button className="btn-outline-info btn rounded-pill">Register as an recruiter</button>
                                </Link>
                                <Link to='/register/jobSeeker'>
                                    <button className="btn-outline-info btn rounded-pill">Register as job seeker</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src={loginBanner} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Login;