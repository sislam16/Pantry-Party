import React from "react";
import { Link } from "react-router-dom";
import {TextField, Button, Typography} from '@material-ui/core'
import {authStyles} from './styling/AuthStyling'

const  Signup = ({ username, password, email, firstname, lastname, isLoggedIn, signupUser, setUsername, setPassword, setEmail, setFirstname, setLastname, setLoggedIn}) =>{
  const handleSubmit = (e) =>{
    e.preventDefault()
    signupUser()
  }


    return (
      <>
        <div className="container">
          <div>
            <form onSubmit={handleSubmit}>
              <Typography
              variant='h3'>Sign-Up</Typography>
              <div>
                <div>
                  <TextField
                  variant='filled'
                  margin='normal'
                    type="text"
                    value={username}
                    label='Username'
                    onChange={(e) => setUsername(e.target.value) }
                    required
                  />
                </div>
                <div>
                  <TextField
                  variant='filled'
                  margin='normal'
                    type="text"
                    value={firstname}
                    label='First Name'
                    onChange={(e)=>(setFirstname(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <TextField
                  variant='filled'
                  margin='normal'
                    type="text"
                    value={lastname}
                    label='Last Name'
                    onChange={(e)=>(setLastname(e.target.value))}
                    className="validate"
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <TextField
                  variant='filled'
                  margin='normal'
                    type="email"
                    value={email}
                    label='Email'
                    onChange={(e)=>(setEmail( e.target.value))}
                    className="validate"
                    required
                  />
                </div>
                <div className>
                  <TextField
                  variant='filled'
                  margin='normal'
                    type="password"
                    value={password}
                    label='Password'
                    onChange={(e)=>(setPassword(e.target.value))}
                    className="validate"
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <Link
                    className="buttonlink"
                    to="/login"
                    style={{ color: "white" }}
                  >
                  
                      Already have an account?
                      <br />
                      Log In here.
                    
                  </Link>
                </div>
                <div>
                  <Button
                    type="submit"
                    name="action"
                  >
                    Register
                  </Button>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

export default Signup;
