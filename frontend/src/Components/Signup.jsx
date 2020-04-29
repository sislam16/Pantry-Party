import React, { Component } from "react";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      email: "",
      firstname: "",
      lasttname: "",
      displayname: "",
      user_password: "",
      redirect: false,
    };
    this.state = this.initialState;
  }

  submitForm = async (event) => {
    event.preventDefault();

    let {
      bio,
      email,
      firstname,
      lastname,
      displayname,
      user_password,
    } = this.state;

    let payload = {
      bio,
      email,
      firstname,
      lastname,
      displayname,
      user_password,
    };

    try {
      let { data } = await Axios.post(
        "http://localhost:3000/users/signup",
        payload
      );
      console.log(data);
      console.log("user id", data.id);
      this.changeID(data.id);
      this.setState({ redirect: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    let {
      state: {email, firstname, lastname, displayname, user_password },
      submitForm,
      handleInput,
    } = this;

    return (
      <>
        <div className="container">
          <div>
            <form onSubmit={submitForm}>
              <h2>Sign-Up</h2>
              <div>
                <div>
                  <input
                    type="text"
                    id="displayname"
                    name="displayname"
                    value={displayname}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="displayname">Username </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={handleInput}
                    className="validate"
                    required
                  />
                  <label htmlFor="firstname">First Name </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={lastname}
                    onChange={handleInput}
                    className="validate"
                    required
                  />
                  <label htmlFor="firstname">Last Name </label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    className="validate"
                    required
                  />
                  <label htmlFor="email">Email </label>
                </div>
                <div className>
                  <input
                    type="password"
                    id="user_password"
                    name="user_password"
                    value={user_password}
                    onChange={handleInput}
                    className="validate"
                    required
                  />
                  <label htmlFor="user_password">Password </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <Link
                    className="buttonlink"
                    to="/login"
                    style={{ color: "white" }}
                  >
                    <button
                      className="btn btn-large btn-register waves-effect waves-light"
                      type="button"
                      name="action"
                    >
                      Already have an account?
                      <br />
                      Log In here.
                    </button>
                  </Link>
                </div>
                <div className="input-field col s6">
                  <button
                    className="btn btn-large btn-register waves-effect waves-light"
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
}

export default Signup;
