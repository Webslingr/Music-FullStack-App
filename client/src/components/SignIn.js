import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../css/signin.css';
import axios from  'axios';


const SignIn = (props) => {

  // localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS! Yay
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState({})



 //use the hook provided by react router
  const navigate = useNavigate();



 const handleSubmit = (e) => {
    e.preventDefault(); //prevents the form from doing a browser submit

    // axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {email, password})
    //   .then((res) => {
         
    //    if (res.status === 200) {
    //       // there should be a token ... store it
    //       localStorage.setItem('token', res.headers['x-auth-token']);
    //       navigate('/');
        
    //       // true means a successful login
    //       // callback(null)
    //     }
    //    })


    // // Reset any validation messages
    // setErrors= ({})


    // authService.signin({ email, password }, error => {
    //     if(!error) {
    //         navigate('/')
    //     }
    //     else {
    //         console.log('error')

    //         // Save our validation errors in state
    //         switch(error.status) {
    //           case 422: {
    //               setErrors(error.data.errors); break;
    //           }
    //           case 400: {
    //               setErrors(error.data); break;
    //           }
    //         }

    //         // if(error.status === 422) {
    //         //   // Store any validation errors in state
    //         //   setErrors(error.data.errors);
    //         // } else if (error.status === 400) {
    //         //   setErrors(error.data)
    //         // }
    //     }
    // })

    authService.signin({ email, password }, (signinSuccess) => {
      if(signinSuccess) {
        navigate('/')
      }
      else {
        console.log('UNSUCCESSFUL LOGIN')
      }
    })
  };

 return (
    <form className="form-signin card box-shadow p-5 mt-5" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      {/* <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label> */}

      <br/>
      <br/>

      <input
        type="email"
        id="inputEmail"
        name="email"
        onChange={(e) => {setEmail(e.target.value);}}
        className="form-control"
        placeholder="Email address"
        autoFocus
      />

      {/* Email error message */}
      
      {/* { 
        errors.email && <div className="alert alert-danger">{ errors.email.message }</div>
      } */}

      <br/>
      
      <label htmlFor="inputPassword" 
        className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        name="password"
        onChange={(e) => {setPassword(e.target.value)}}
        className="form-control"
        placeholder="Password"
      />


      {/* Password error message */}
      
      {/* { 
        errors.password && <div className="alert alert-danger">{ errors.password.message }</div>
      }
      { 
        errors.serverMessage && <div className="alert alert-danger">{ errors.serverMessage }</div>
      } */}

      <br/>
      
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};



export default SignIn;