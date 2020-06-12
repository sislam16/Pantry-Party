import React from "react"
import { Link, Redirect, useHistory } from "react-router-dom";
import { TextField, Button, Typography, Container } from '@material-ui/core'
import { authStyles } from './styling/AuthStyling'

const LogIn = ({ username, password, setUsername, setPassword, isLoggedIn, setLoggedIn, loginUser }) => {
  const history =useHistory()
  const classes = authStyles()
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <div className='login'style={{height:'100vh', marginTop:'20px'}}>
      <Container>
      <Typography
            variant='h3'
          style={{fontWeight:'bold', paddingTop:'20px', color:'#ed7902'}}>Log In</Typography> <br/>
        <form onSubmit={handleSubmit} style={{marginTop:'10px'}}>
          <div>
            <TextField
              variant='filled'
              margin='normal'
              className={classes.textField}
              type="username"
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>


          <div>
            <TextField
              variant='filled'
              margin='normal'
              className={classes.textField}
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <div>
              <Link to="/signup" className={classes.link}>
                New? Sign Up here.
                  </Link>
            </div>
            <div>
              <Button onClick={handleSubmit}>
                Log-In
                  </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default LogIn;
