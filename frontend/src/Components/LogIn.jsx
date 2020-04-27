import React, { Component } from "react";
import { Link} from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: "",
    };
  }


  submitForm = async (event) => {
    event.preventDefault();

    let { email, user_password } = this.state;
  };

  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    let {
      state: { email, user_password, redirect, error },
      submitForm,
      handleInput,
    } = this;

    return (
      <>
        <div className="container">
          <div>
            <form onSubmit={submitForm}>
              <h2>Log-In Page</h2>
              <div>
                <div>
                  <input
                    className="validate"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    className="validate"
                    type="password"
                    id="user_password"
                    name="user_password"
                    value={user_password}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="user_password">Password</label>
                </div>
              </div>
              <div>
                <div>
                  <Link to="/signup">
                    <button
                      type="button"
                      name="action"
                    >
                      New?
                      <br />
                      Sign Up here.
                    </button>
                  </Link>
                </div>
                <div>
                  <button type="submit" name="action" onClick={this.notify}>
                    Log-In
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

export default Landing;
