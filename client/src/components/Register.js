import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../css/signin.css';
import axios from  'axios';


const Register = (props) => {

  // localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS! Yay
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



 //use the hook provided by react router
  const navigate = useNavigate();



 const handleSubmit = (e) => {
    e.preventDefault(); //prevents the form from doing a browser submit

    // axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {firstName, lastName, email, password})
    //   .then((res) => {
         
    //    if (res.status === 200) {
    //       // there should be a token ... store it
    //       localStorage.setItem('token', res.headers['x-auth-token']);
    //       navigate('/');
        
    //       // true means a successful login
    //       // callback(null)
    //     }
    //    })
   

    authService.register({ firstName, lastName, email, password }, (registerSuccess) => {
        if(registerSuccess) {
            navigate('/')
        }
        else {
            console.log('Unsuccessful Registration')
        }
    })
  };

  // const handleChange = event => {
  //   //let's update the state for the approriate field

  //     switch(event.target.name) {
  //       case 'fname': {
  //         //update the first name state hook
  //         setFirstName(event.target.value)
  //         break;
  //       }
  //       case 'lname': {
  //         //update the last name state hook
  //         setLastName(event.target.value)
  //         break;
  //       }
  //       case 'email': {
  //         //update the email state hook
  //         setEmail(event.target.value)
  //         break;
  //       }
  //       case 'password': {
  //         //update the password hook
  //         setPassword(event.target.value)
  //         break;
  //       }
  //     }
  // }
 return (
    <form className="form-signin card box-shadow p-5 my-4" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign up</h1>
      
      <br/>
      <br/>

      <label htmlFor="inputFirstName" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="First Name"
        required
        autoFocus
      />

      <br/>

      <label htmlFor="inputLastName" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="lname"
        name="lname"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Last Name"
        required
        autoFocus
      />

      <br/>

      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />

      <br/>

      <label htmlFor="inputPassword" 
        className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        // onChange={handleChange}
        className="form-control"
        placeholder="Password"
        required
      />

      <br/>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign Up
      </button>
    </form>
  );
};



export default Register;