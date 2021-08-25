import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import loginBanner from "../../../images/undraw_unlock_24mb.svg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import { useContext } from "react";
import {setJWTToken} from '../AuthManager'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [signInInfo, setaSignInInfo] = useState();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

  const handleInput = (e) =>{
    e.preventDefault()
    const info = {...signInInfo}
    info[e.target.name] = e.target.value
    setaSignInInfo(info)

  }

  const handleSignIn =()=>{
   firebase.auth().signInWithEmailAndPassword(signInInfo.email, signInInfo.password)
  .then((userCredential) => {
    // Signed in
    console.log(userCredential)
    var user = userCredential.user;
    setLoggedInUser({"email":user.email})
    history.push(from);
    setJWTToken()

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  }
 
  // const handleGoogleSignIn = () => {
    
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((res) => {
  //       console.log(res);
  //       history.push("/home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <section className="" style={{marginTop:"130px"}}>
      <Header />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
            <h3 className='text-brand'>Enter Your Credential</h3>
            <div className="w-75 py-2">
              <HiOutlineMail className="fs-4 my-2 text-brand" />
              <label htmlFor="email" className="px-1">
                Email
              </label>
              <input
                onChange={handleInput}
                name="email"
                type="email"
                className="custom-input d-block w-100 px-3 py-3 rounded"
                placeholder="John@Example.com"
        
              />
            </div>
            <div className="w-75 py-2">
              <RiLockPasswordLine className="fs-4 my-2 text-brand" />
              <label htmlFor="email" className="px-1">
                Password
              </label>
              <input
              onChange={handleInput}
              name="password"
                type="password"
                className="custom-input d-block w-100 px-3 py-3 rounded"
                placeholder="Must be at-least 6 Characters"
                
              />
            </div>
            <button onClick={handleSignIn} className="btn-brand-outline w-50 mt-2">Login</button>
           
            {/* <button
              className="btn btn-outline-info w-50 mt-2"
              onClick={handleGoogleSignIn}
            >
              Login With Google
            </button> */}
            <div className="w-75 text-center py-3">
              <p>New to Job-Zilla ?</p>
              <div className="d-md-flex justify-content-evenly">
                <Link to="/register/recruiter">
                  <button className="btn-brand-outline rounded-pill mb-2">
                    Register as an recruiter
                  </button>
                </Link>
                <Link to="/register/jobSeeker">
                  <button className="btn-brand-outline rounded-pill">
                    Register as job seeker
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center py-5">
            <img className="img-fluid" src={loginBanner} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;