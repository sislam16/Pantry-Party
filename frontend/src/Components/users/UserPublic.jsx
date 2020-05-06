import React, {Component} from 'react'
import axios from 'axios';

//do axios call to get all info about the user 

const getUserInfo = async () => {
    try{


    }catch(error){
        console.log('err:', error)
    }
}

 class UserPublic extends Component{
     constructor(){
        super()

        this.state = {
            username: '',
            avatar: '',
            bio:''

        }
     }
     render(){
    return(
        <div className='user-public'>
            <div className='userInfo'>
                <img src ='#'className='user-avatar'/>
                <h2 className='username'>USERNAME</h2>
                <p className='user-bio'><span>Bio:</span></p>
            </div>

        </div>
    )
     }
}

export default UserPublic;