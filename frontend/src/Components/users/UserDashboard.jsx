import React from 'react';
import ApiRecipesComponent from '../recipes/ApiRecipeComponent';
import EventComponentUD from '../events/EventsComponent';
import UserDashCookbook from '../recipes/UserDashCookbook';


const UserDashboard = ({ user, eventsArr }) => {
    console.log(user)
    return (
        <div className='user-dashboard'>
            <h1>Welcome {user.username}</h1>
            <ApiRecipesComponent />
            <UserDashCookbook/>
            <EventComponentUD/>
        </div>
    )
}


export default UserDashboard;
