import React from "react"
import { Link, Redirect } from "react-router-dom";
import { TextField, Button, Typography } from '@material-ui/core'
import { authStyles } from './styling/AuthStyling'

const LogIn = ({ username, password, setUsername, setPassword, isLoggedIn, setLoggedIn, loginUser }) => {
  const classes = authStyles()
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  if (isLoggedIn) {
    return <Redirect to='/home' />
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Typography
            variant='h3'
          >Log In</Typography>

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
              <Button type="submit" name="action">
                Log-In
                  </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
