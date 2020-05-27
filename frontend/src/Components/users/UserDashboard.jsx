import React from 'react';
import ApiRecipesComponent from '../recipes/ApiRecipeComponent';
import EventComponentUD from '../events/EventsComponent'


const UserDashboard = ({ user }) => {
    console.log(user)

    return (
        <div className='user-dashboard'>
            <h1>Welcome {user.username}</h1>
            <ApiRecipesComponent />

            <div className='dashboard-cookbook'>

            </div>

            <EventComponentUD />
        </div>
    )
}


export default UserDashboard;
