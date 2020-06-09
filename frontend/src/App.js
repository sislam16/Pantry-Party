import React, { useState } from "react";
import './App.css';
import { Route, Switch, withRouter, useHistory, useParams } from "react-router-dom";
import Error from "./Components/Error";
import AuthContainer from "./containers/AuthContainer";
import UserDashboard from './Components/users/UserDashboard'
import UserPublic from './Components/users/UserPublic';
import SingleRecipe from "./Components/recipes/SingleRecipe";
import NavBar from './Components/Nav'
import axios from 'axios';
import Settings from "./Components/users/Settings";
import APIRecipe from "./Components/recipes/ApiRecipeExpand";
import NewEvent from "./Components/events/NewEvent";
import NewRecipe from './Components/recipes/NewRecipe';
import Landing from './Components/Landing';
import Streams from './Components/broadcast/Streams';
import Broadcast from './Components/broadcast/Broadcast';
import Watch from './Components/broadcast/Watch';


const App = () => {
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ user: null })
  const history = useHistory()

  const checkUserLoggedIn = async () => {
    try {
      let response = await axios.get('/auth/isUserLoggedIn')
    } catch (error) {
      console.log('err:', error)
    }
  }

  const logoutUser = async () => {
    try {
      await axios.get('/auth/logout')
      console.log('logout clicked')
      setUser({})
      setLoggedIn(false)
      history.push('/login') // redirect user to login page
    } catch (error) {
      console.log('err:', error)
    }
  }

  // const { id } = useParams()
  // console.log(id)


  return (
    <div className="App">
      <NavBar
        logoutUser={logoutUser}
        isLoggedIn={isLoggedIn}
      />

      <Switch>
        <Route exact path="/signup" >
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

        <Route exact path="/login" >
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

        <Route exact path='/home'>
          <UserDashboard
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>

        <Route exact path='/profile'>
          <UserPublic
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route exact path='/settings'>
          <Settings
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route exact path='/recipe/random/:recipe_id'>
          <APIRecipe
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route exact path='/cookbook/recipe/:recipe_id'>
          <SingleRecipe
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route exact path='/events/new'>
          <NewEvent
            user={user}
          />
        </Route>
        <Route exact path='/cookbook/new'>
          <NewRecipe
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/streams" component={Streams} />
        <Route path="/broadcast" component={Broadcast} />
        <Route path="/watch/:broadcasterId" component={Watch} />
        <Route exact path='/logout'></Route>
        <Route exact path='/'><Landing /></Route>
        <Route path="*" render={() => <Error />} />
      </Switch>

    </div>
  );
}


export default withRouter(App);
