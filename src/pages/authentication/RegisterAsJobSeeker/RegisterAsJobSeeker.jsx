import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { emailRegex, passRegex } from "../../../components/Regexp/Regexp";
import registerBanner from "../../../images/undraw_unlock_24mb.svg";
import firebase from "firebase/app";
import "firebase/auth";
import {useHistory} from 'react-router-dom';


// firebase.initializeApp(firebaseConfig);

const RegisterAsJobSeeker = () => {
  const [inputError, setInputError] = React.useState({});
  const [regInfo, setRegInfo] = React.useState({});
  const history = useHistory();

  const handleInputValidation = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    const info = { ...regInfo };
    if (inputId === "email") {
      if (!emailRegex.test(inputValue)) {
        setInputError({
          ...inputError,
          name: inputId,
          errorMessage: "Please Type a Valid Email !",
        });
        info[inputId] = null;
        setRegInfo(info);
      } else {
        setInputError(null);
        info[inputId] = inputValue;
        setRegInfo(info);
      }
    }
    if (inputId === "password") {
      if (!passRegex.test(inputValue)) {
        setInputError({
          ...inputError,
          name: inputId,
          errorMessage:
            "Must be more than 8 chars combine with uppercase and lowercase, and at least one number",
        });
        info[inputId] = null;
        setRegInfo(info);
      } else {
        setInputError(null);
        info[inputId] = inputValue;
        setRegInfo(info);
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (regInfo.email && regInfo.password) {
      alert("Register Success, Please Login");
      firebase
        .auth()
        .createUserWithEmailAndPassword(regInfo.email, regInfo.password)
        .then((userCredential) => {
          var regInfo = userCredential.regInfo;
          addCandidateToDB()
          history.push('/login')
          
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    } else {
      alert("information invalid");
    }
  };

  const addCandidateToDB = () =>{
    const user = {
      role: "Candidate",
      email: regInfo.email
    }
    console.log(user);
    fetch('https://aqueous-cove-89051.herokuapp.com/addUser',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
      
      .then(response => response.json())
      .then(data => {
          console.log(data);
          if (data) {
              console.log("Candidate added successfully!")
          }
      })
      .catch(error => {
          console.error(error)
      })
  // }

  })
  }

  return (
    <section style={{marginTop:"130px"}}>
      <Header />
      <div
        className="container py-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
            <h3>Create Your Account</h3>
            <div className="p-2 w-75">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={handleInputValidation}
                className="form-control py-2"
                id="email"
                placeholder="Name@example.com"
              />
              {inputError?.name === "email" && (
                <p className="text-danger text-center">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>
            <div className="p-2 w-75">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={handleInputValidation}
                className="form-control py-2"
                id="password"
                placeholder="Enter Your Secret Code"
              />
              {inputError?.name === "password" && (
                <p className="text-danger text-center">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>
            <div className="p-2 w-75">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="firstName"
                    placeholder="John"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="lastName"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
            <p className="p-2">
              By registering, you agree to our{" "}
              <span>
                <a href="/">Terms & Conditions.</a>
              </span>
            </p>
            <button
              onClick={handleRegister}
              className="btn btn-outline-info w-50"
            >
              Register Now
            </button>
            <div className="w-75 text-center py-3">
              <p>
                Have an Account ? Please{" "}
                <Link to="/login">
                  <button className="btn text-info border">Login</button>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={registerBanner} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default RegisterAsJobSeeker;