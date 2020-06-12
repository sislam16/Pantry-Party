import React from 'react'
import axios from 'axios';
import {Container, Typography} from '@material-ui/core'

const UserPublic = ({ user }) => {

    return (
       <Container style={{marginTop:'20px'}}>
            <div className='userInfo'>
                <img src={user.avatar} className='user-avatar' />
                <Typography variant ='h3' style={{fontWeight: 'bold', color:'#ed7902'}}>{user.username}</Typography>
                <p className='user-bio'><span><strong>About Me:</strong></span>{user.bio}</p>
            </div>
            <div className='userHistory'>
            <h3>HISTORY</h3>
            {/* past events/recipes are supposed to show up here */}
            </div>
            </Container>
    )
}


export default UserPublic;