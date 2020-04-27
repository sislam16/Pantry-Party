import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Signup from "./Components/Signup";
import LogIn from "./Components/LogIn";

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
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <LogIn />} />
          <Route path="*" render={() => <Error />} />
        </Switch>
      </div>
    );
  }
}

export default App;
