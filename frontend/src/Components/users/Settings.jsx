import React from 'react'

const Settings = ({user}) =>{
return(
    <div>
        <form action="">
          <h4>username:</h4>  <p>{user.username}</p>
          <h4>firstname:</h4>  <p>{user.firstname}</p>
          <h4>lastname:</h4>  <p>{user.lastname}</p>
          <h4>Bio:</h4> <p>{user.bio}</p>
           <button>Edit</button> <button>Deactivate Account</button>

        </form>
    </div>
)
}

export default Settings