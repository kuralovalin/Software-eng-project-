import React, { useState,useContext } from "react";
import { Redirect } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomePage from './WelcomePage';
import "./login-signup.css";
import MainContext from '../contexts/MainContext';
import axios from 'axios';
const ENDPOINT = "https://memovercity.herokuapp.com/user/register";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        memovercity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function SignUp(props) {
  const[state,setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    isLoggedIn: false,
    isValid: false,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  });

  const {setLogin,setName,setToken} = useContext(MainContext);
    


  

  const handleSubmit = e => {
    e.preventDefault();
    
    axios.post(ENDPOINT,{name:state.firstName,email: state.email, password:state.password})
    .then( (res) => {
        if(res.status === 200) {
          setToken(res.data.aTo);
          setLogin(true);
          setName(res.data.username);
          setState({...state,isLoggedIn: true});
        
        }
        
    });
  };

  const buttonClicked = (event) => {
    handleSubmit(event);
  }

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    setState({ ...state,formErrors, [name]: value }, () => null);
  };

    const { formErrors } = state;
    const isLoggedIn = state.isLoggedIn;
        
    if (isLoggedIn && formValid(state)) {
      return <Redirect to="/user" component={WelcomePage}/>
    }

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" onClick={buttonClicked}>
                Sign Up
              </button>
            </div>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
          </Grid>
          </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
      </div>
    );
  
}

export default SignUp;