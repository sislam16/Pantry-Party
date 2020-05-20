import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'
import SuggestedRecipeCard from '../recipes/SuggestedRecipeCard'
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
