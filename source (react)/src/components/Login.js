import React, {  useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomePage from './WelcomePage';
import "./login-signup.css";
import axios from "axios";
import MainContext from '../contexts/MainContext';
const ENDPOINT = "https://memovercity.herokuapp.com/user/login";
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

function Login(props) {
  const [state,setState] = useState({email: null,password: null,isLoggedIn: false,
    formErrors: {
      email: "",
      password: ""
    }});
    
      
    const {setName, setLogin, setToken} = useContext(MainContext);

    const buttonClicked = (event) => {
      //Login Logic will be implemented here
      handleSubmit(event);
    }

    const handleSubmit = e => {
        e.preventDefault();
      
        if (formValid(state)) {
          console.log(`
            --SUBMITTING--
            Email: ${state.email}
            Password: ${state.password}
          `); 
          
          axios.post(ENDPOINT,{email: state.email, password:state.password})
          .then( (res) => {
              if(res.status === 200) {
                setToken(res.data.aTo);
                setLogin(true);
                setName(res.data.username);
                setState({...state,isLoggedIn: true});
              
              }
              console.log(res.data);
          })
          .catch(e => console.log("Error is : ", e));

          
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
      const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...state.formErrors };
    
        switch (name) {
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
    
        setState({ ...state,formErrors, [name]: value });
      };
    
      
        const { formErrors } = state;
        const isLoggedIn = state.isLoggedIn;
        
        if (isLoggedIn && formValid(state)) {
          return <Redirect to="/user" component={WelcomePage}/>
        }

        return (
          
            <div className="wrapper">
            <div className="form-wrapper">
              <h1>Log In</h1>
              <form onSubmit={handleSubmit} noValidate>
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
                    Log In
                  </button>
                </div>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
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
    
    export default Login;