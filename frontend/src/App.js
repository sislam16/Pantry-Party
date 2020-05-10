
import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import AuthContainer from "./containers/AuthContainer";
import Users from "./components/users/Users";
import UserDashboard from './components/users/UserDashboard'
import SingleRecipe from "./Components/SingleRecipe";

const App = ()=> {

    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)


    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" >
          <AuthContainer
          username={username} 
          firstname = {firstname} 
          lastname = {lastname} 
          password = {password} 
          email ={email} 
          user={user}
          isLoggedIn={isLoggedIn}
          setUsername = {setUsername}
          setFirstname = {setFirstname}
          setLastname = {setLastname}
          setEmail = {setEmail}
          setPassword = {setPassword}
          setLoggedIn = {setLoggedIn}
          setUser = {setUser}
          />
          </Route>
          
          <Route exact path="/login"><AuthContainer 
          username = {username} 
          password={password}
          user={user} 
          isLoggedIn={isLoggedIn}
          setUsername = {setUsername}
          setPassword = {setPassword}
          setLoggedIn = {setLoggedIn}
          setUser={setUser}
          />
          </Route>
          <Route exact path ='/home' component = {UserDashboard} />
          <Route exact path = '/users' component = {Users} />
          <Route exact path = '/singlerecipe' component = {SingleRecipe} />

          <Route path="*" render={() => <Error />} />
        </Switch>
      </div>
    );
  }


export default App;
