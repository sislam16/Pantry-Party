import React from "react";
import { Redirect, Link } from "react-router-dom";


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
              <h2>Sign-Up</h2>
              <div>
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value) }
                    required
                  />
                  <label htmlFor="username">Username </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e)=>(setFirstname(e.target.value))}
                    required
                  />
                  <label htmlFor="firstname">First Name </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e)=>(setLastname(e.target.value))}
                    className="validate"
                    required
                  />
                  <label htmlFor="lastname">Last Name </label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>(setEmail( e.target.value))}
                    className="validate"
                    required
                  />
                  <label htmlFor="email">Email </label>
                </div>
                <div className>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>(setPassword(e.target.value))}
                    className="validate"
                    required
                  />
                  <label htmlFor="password">Password </label>
                </div>
              </div>
              <div>
                <div>
                  <Link
                    className="buttonlink"
                    to="/login"
                    style={{ color: "white" }}
                  >
                    <button
                      type="button"
                      name="action"
                    >
                      Already have an account?
                      <br />
                      Log In here.
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    name="action"
                  >
                    Register
                  </button>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

export default Signup;
