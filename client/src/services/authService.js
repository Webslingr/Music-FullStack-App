import axios from "axios";

class authService {
    
    signin(credentials, callback){
        // we will post the form data to the API for authentication
        // fetch or axios 
        console.log(credentials)
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, credentials)
              .then((res) => {
              
                if (res.status === 200) {
                  // there should be a token ... store it
                  localStorage.setItem('token', res.headers['x-auth-token']);
                  
                  // true means a successful login
                  callback(true)
                }
              })
              // for unsuccessful login
              .catch(error => {
                  console.log(error.res)
                  callback(false)
                  // callback(error.res)
              })
    }

    register(registerCredentials, callback){
        // we will post the form data to the API for authentication
        // fetch or axios 
        axios.post(`${process.env.REACT_APP_API_URL}/users/register`, registerCredentials)
        .then((res) => {
          if (res.status === 200) {
            // there should be a token ... store it
            localStorage.setItem('token', res.headers['x-auth-token']);
            
            // true means a successful register
            callback(true)
            // callback(null) // null means no error
          }
        })
        // for unsuccessful register
        .catch(error => {
            console.log(error.res)
            callback(false)
            // callback(error.res)
        })
    }

    isAuthenticated(){
      return localStorage.getItem('token') !== null
    }

    signout(){
      localStorage.removeItem('token')
    }

    getToken() {
      return localStorage.getItem('token')
    }

}

export default new authService()