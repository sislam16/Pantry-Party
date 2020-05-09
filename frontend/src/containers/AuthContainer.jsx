import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from "../components/Signup";
import LogIn from "../components/LogIn";
import axios from 'axios';

const AuthContainer = ({ username, password, firstname, lastname, email, user, setUser, isLoggedIn, setUsername, setFirstname, setLastname, setPassword, setEmail, setLoggedIn }) => {


    const signupUser = async () => {
        let payload = {
            email,
            firstname,
            lastname,
            username,
            password,
        };

        try {
            let { data } = await axios.post(
                "/auth/signup",
                payload
            );
            console.log(data);
            console.log("user id", data.id);
            return <Redirect to='login' />
        } catch (error) {
            console.log(error);
        }

    }

    const loginUser = async () => {
        let payload = {
            username,
            password
        }

        try {
            const { data } = await axios.post('/auth/login', payload)
            console.log(data)
            setUser(data.payload)
            setLoggedIn(true)
            return <Redirect to='/home' />
        } catch (error) {
            console.log('err:', error)
        }
        console.log('logging user in')

    }

    if (isLoggedIn) {
        return <Redirect to='/home' />
    }
    return (

        <div>
            <h2>AuthContainer</h2>
            <Switch>
                <Route exact path='/login'>
                    <LogIn
                        username={username}
                        password={password}
                        user={user}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setUser={setUser}
                        loginUser={loginUser}
                    /></Route>
                <Route exact path='/signup'>
                    <Signup
                        username={username}
                        password={password}
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        user={user}
                        signupUser={signupUser}
                        setUsername={setUsername}
                        setFirstname={setFirstname}
                        setLastname={setLastname}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setLoggedIn={setLoggedIn}
                        setUser={setUser}
                    />
                </Route>
            </Switch>
        </div>
    )
}


export default AuthContainer;