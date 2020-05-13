import React from 'react'
import axios from 'axios';

//do axios call to get all info about the user 

const UserPublic = ({ user }) => {

    return (
        <div className='user-public'>
            <div className='userInfo'>
                <img src={user.avatar} className='user-avatar' />
                <h2 className='username'>{user.username}</h2>
                <p className='user-bio'><span><strong>About Me:</strong></span>{user.bio}</p>
            </div>

        </div>
    )
}


export default UserPublic;