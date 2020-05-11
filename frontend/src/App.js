
import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Error from "./components/Error";
import AuthContainer from "./containers/AuthContainer";
import Users from "./components/users/Users";
import UserDashboard from './components/users/UserDashboard'
<<<<<<< HEAD
import SingleRecipe from "./Components/SingleRecipe";
=======
import NavBar from './components/Nav'
import axios from 'axios';



>>>>>>> 21a3c83a86dc412c3181ed1abe6d5ee89f52dbc5

const App = ()=> {

    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({user: null})

    const checkUserLoggedIn = async () =>{
      try{
       let response = await axios.get('/auth/isUserLoggedIn')
      } catch(error){
        console.log('err:', error)
      }
    }

    const logoutUser = async () =>{
        try{
          await axios.get('/auth/logout')
          console.log('logout clicked')
          setUser(null)
          setLoggedIn(false)
          this.props.history.push('/login') // redirect user to login page
        }catch(error){
          console.log('err:',error)
        }
    }

    const renderAuthContainer = (routeProps) =>{
      return <AuthContainer setUser = {setUser} {...routeProps}
      username = {username} 
          password={password}
          user={user} 
          isLoggedIn={isLoggedIn}
          setUsername = {setUsername}
          setPassword = {setPassword}
          setLoggedIn = {setLoggedIn}
          setUser={setUser}/>
    }

    return (
      <div className="App">
        <NavBar 
        logoutUser = {logoutUser}
        isLoggedIn = {isLoggedIn}
        />

        <Switch>
          <Route exact path="/signup" render ={renderAuthContainer} >
          {/* <AuthContainer
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
          routeProps = {routeProps}
          /> */}
          </Route>
          
          <Route exact path="/login" render ={renderAuthContainer}>
          {/* <AuthContainer 
          username = {username} 
          password={password}
          user={user} 
          isLoggedIn={isLoggedIn}
          setUsername = {setUsername}
          setPassword = {setPassword}
          setLoggedIn = {setLoggedIn}
          setUser={setUser}
          /> */}
          </Route>

          <Route exact path ='/home'> 
          <UserDashboard
          user={user}
          />
          </Route>

          <Route exact path = '/users' component = {Users} />
          <Route exact path = '/singlerecipe' component = {SingleRecipe} />

          <Route exact path='/logout'></Route>
          <Route path="*" render={() => <Error />} />
        </Switch>

      </div>
    );
  }


export default withRouter(App);
