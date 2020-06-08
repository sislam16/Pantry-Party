import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { navStyles } from './styling/navStyling';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LiveTvIcon from '@material-ui/icons/LiveTv';

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
                <Typography edge='start'variant="h6" className={classes.title}>
                        Pantry Party
                    </Typography>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('home') }}
                    >
                        <HomeIcon />
                    </IconButton>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('profile') }}
                    >
                        <PersonIcon />
                    </IconButton>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => { rerouteNav('settings') }}
                    >
                        <SettingsIcon />
                    </IconButton>

                  <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={()=>{rerouteNav('/live')}}>
                      <LiveTvIcon />
                  </IconButton>

                    <IconButton
                        edge="start"
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