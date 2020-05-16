import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Error from "./components/Error";
import AuthContainer from "./containers/AuthContainer";
import Users from "./components/users/Users";
import UserDashboard from "./components/users/UserDashboard";
import UserPublic from "./components/users/UserPublic";
import SingleRecipe from "./components/recipes/SingleRecipe";
import RandomRecipes from "./components/recipes/RandomRecipes";
import NavBar from "./components/Nav";
import CreateEvent from "./components/events/CreateEvent";
import axios from "axios";
import Settings from "./components/users/Settings";

const App = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ user: null });
  const [apiRecipes, setApiRecipe] = useState([]);

  //similar to component did mount
  useEffect(() => {
    const fetchRecipes = async () => {
      const resultArr = [];
      while (resultArr.length < 4) {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        resultArr.push(data.meals[0]);
      }
      setApiRecipe(resultArr);
    };

    fetchRecipes();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      let response = await axios.get("/auth/isUserLoggedIn");
    } catch (error) {
      console.log("err:", error);
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get("/auth/logout");
      console.log("logout clicked");
      setUser(null);
      setLoggedIn(false);
      this.props.history.push("/login"); // redirect user to login page
    } catch (error) {
      console.log("err:", error);
    }
  };

  console.log(apiRecipes);

  return (
    <div className="App">
      <NavBar logoutUser={logoutUser} isLoggedIn={isLoggedIn} />

      <Switch>
        <Route exact path="/signup">
          <AuthContainer
            username={username}
            firstname={firstname}
            lastname={lastname}
            password={password}
            email={email}
            user={user}
            isLoggedIn={isLoggedIn}
            setUsername={setUsername}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setEmail={setEmail}
            setPassword={setPassword}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
          />
        </Route>

        <Route exact path="/">
          <AuthContainer
            username={username}
            password={password}
            user={user}
            isLoggedIn={isLoggedIn}
            setUsername={setUsername}
            setPassword={setPassword}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
          />
        </Route>

        <Route exact path="/home">
          <UserDashboard user={user} />
        </Route>
        <Route exact path="/event/create">
          <CreateEvent user={user} />
        </Route>

        <Route exact path="/recipes/random">
          <RandomRecipes user={user} apiRecipes={apiRecipes} />
        </Route>

        <Route exact path="/users" component={Users} />
        <Route exact path="/profile">
          <UserPublic user={user} />
        </Route>
        <Route exact path="/settings">
          <Settings user={user} />
        </Route>
        <Route exact path="/singlerecipe" component={SingleRecipe} />

        <Route exact path="/logout"></Route>
        <Route path="*" render={() => <Error />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
