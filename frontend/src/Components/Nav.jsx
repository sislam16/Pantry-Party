import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { navStyles } from './styling/navStyling';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import navlogo from './additional/Pantry-Party-P.png'

const NavBar = ({ logoutUser, isLoggedIn }) => {
    const classes = navStyles()
    const history = useHistory()

    const rerouteNav = (route) => {
        history.push(`/${route}`)
    }

    if (isLoggedIn) {
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <span><img src ={navlogo} className ={classes.logo} style={{height:'40px'}}/></span>
                    
                    <IconButton
                        edge="false"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('home') }}
                    >
                        <HomeIcon />
                    </IconButton>

                    <IconButton
                        edge="false"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('profile') }}
                    >
                        <PersonIcon />
                    </IconButton>

                    <IconButton
                        edge='false'
                        color='inherit'
                        aria-label='menu'
                        onClick={() => { rerouteNav('streams') }}>
                        <LiveTvIcon />
                    </IconButton>
                    
                    <IconButton
                        edge="false"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('settings') }}
                    >
                        <SettingsIcon />
                    </IconButton>



                    <IconButton
                        edge="false"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={logoutUser}>
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>

            </AppBar>
        )
    }
    return null
}

export default NavBar;