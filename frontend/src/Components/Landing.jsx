import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {authStyles} from './styling/AuthStyling'
import logo from './additional/PantryPartyLogo.svg'


const Landing = () => {
    const classes = authStyles();
    const history = useHistory();
    const rerouteAuth = (route) => {
        history.push(`/${route}`)
    }

    return (
        <div className='landing'>
            <img src={logo} alt='logo'/> <br/>
            <Button className={classes.button} variant='outlined' size='large' onClick={()=>{rerouteAuth('login')}}>
                Login</Button>
            <Button className={classes.button} variant='outlined' size='large' onClick={()=>{rerouteAuth('signup')}}>Sign up</Button>
        </div>
    )
}

export default Landing