import React from 'react';
import ApiRecipesComponent from '../recipes/ApiRecipeComponent';
import EventComponentUD from '../events/EventsComponent';
import UserDashCookbook from '../recipes/UserDashCookbook';
import { Typography } from '@material-ui/core'


const UserDashboard = ({ user, eventsArr }) => {
    console.log(user)
    return (
        <div className='user-dashboard'>
            <Typography variant='h3' style={{ fontWeight: 'bold', marginBottom: '20px', marginTop:'20px' }}>
                Welcome <span style={{ color: '#ed7902' }}>{user.username}</span>!
            </Typography>
            
            <ApiRecipesComponent />
            <UserDashCookbook
                user={user} />
            <EventComponentUD
                user={user} />
        </div>
    )
}


export default UserDashboard;
