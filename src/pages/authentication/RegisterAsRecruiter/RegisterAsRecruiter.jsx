import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { bdNumberRegex, emailRegex, passRegex } from '../../../components/Regexp/Regexp';
import registerBanner from '../../../images/undraw_unlock_24mb.svg';
import firebase from "firebase/app";
import "firebase/auth";
import {useHistory} from 'react-router-dom';


const RegisterAsRecruiter = () => {
    const [inputError, setInputError] = React.useState({});
    const [regInfo, setRegInfo] = React.useState({});
    const history = useHistory();

    // console.log(regInfo);
    const handleInputValidation = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const info = {...regInfo};
        if(inputName === 'email'){
            if(!emailRegex.test(inputValue)){
                setInputError({name: inputName, errorMessage: 'Please Type a Valid Email !'})
                info[inputName] = null;
                setRegInfo(info)
            }else{
                setInputError(null);
                info[inputName] = inputValue;
                setRegInfo(info)
            };
        };
        if(inputName === 'password'){
            if(!passRegex.test(inputValue)){
                setInputError({name: inputName, errorMessage: 'Must be more than 8 chars combine with uppercase and lowercase, and at least one number'})
                info[inputName] = null;
                setRegInfo(info)
            }
            else{
                setInputError(null)
                info[inputName] = inputValue;
                setRegInfo(info)
            }
        };
        if(inputName === 'number'){
            if(!bdNumberRegex.test(inputValue)){
                setInputError({name: inputName, errorMessage: 'Number must be 11 digit and start with 01'})
                info[inputName] = null;
                setRegInfo(info)
            }
            else{
                setInputError(null)
                info[inputName] = inputValue;
                setRegInfo(info)
            }
        };
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
          addRecruiterToDB()
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

  const addRecruiterToDB = () =>{
    const user = {
      role: "Recruiter",
      email: regInfo.email
    }
    // console.log(user);
    fetch('https://aqueous-cove-89051.herokuapp.com/addUser',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)

  })
  }


    return (
        <section style={{marginTop:"130px"}}>
            <Header />
            <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
                        <h3>Create Your Account</h3>
                        <div className="p-2 w-75">
                            <label htmlFor="email">Official Email Id</label>
                            <input type="text" onChange={handleInputValidation} className="form-control py-2" name='email' id='email' placeholder='Name@Company_Name.com' />
                            {
                                inputError?.name === 'email' && <p className='text-danger text-center'>{inputError?.errorMessage}</p> 
                            }
                        </div>
                        <div className="p-2 w-75">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleInputValidation} className="form-control py-2" name='password' id='password' placeholder="Enter Your Secret Code" />
                            {
                                inputError?.name === 'password' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                            }
                        </div>
                        <div className="p-2 w-75">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className='form-control py-2' id='firstName' placeholder='Patrick'/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className='form-control py-2' id='lastName' placeholder='Williams'/>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-75">
                            <label htmlFor="mobile">Mobile Number</label>
                            <div className="row">
                                <div className="col-3">
                                    <input type="text" className='form-control py-2' value='+88' name='country_code'/>
                                </div>
                                <div className="col-9">
                                    <input onChange={handleInputValidation} className='form-control py-2' type="number" name="number" id="mobile" placeholder='11 Digit Mobile Number' />
                                    {
                                        inputError?.name === 'number' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <p className="p-2">By registering, you agree to our <span><a href="/">Terms & Conditions.</a></span></p>
                        <button onClick={handleRegister} className="btn btn-outline-info w-50">Register Now</button>
                        <div className="w-75 text-center py-3">
                            <p>
                                Have an Account ? Please <Link to="/login">
                                    <button className='btn btn-info rounded'>
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

export default RegisterAsRecruiter;