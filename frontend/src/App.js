
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";
import AuthContainer from "./containers/AuthContainer";
import Users from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdLoggedIn: 0,
    };
  }


  render() {
    const {
      state: { userIdLoggedIn },
    } = this;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={AuthContainer} render={() => <Signup />} />
          <Route exact path="/login" component={AuthContainer} render={() => <LogIn />} />
          <Route exact path = '/users' component = {Users} />
          <Route path="*" render={() => <Error />} />
        </Switch>
      </div>
    );
  }
}

export default App;
