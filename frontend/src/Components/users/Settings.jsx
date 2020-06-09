import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button, Typography } from '@material-ui/core'

const Settings = ({ user }) => {
    const [edit, setEdit] = useState(false)
    const [username, setUsername] = useState(user.username)
    const [firstname, setFirstname] = useState(user.firstname)
    const [lastname, setLastname] = useState(user.lastname)
    const [bio, setBio] = useState(user.bio)

    const handleUpdate = async () => {
        console.log('update info')
        let user_id = user.id
        try {
            let updateInfo = await axios.post(`/api/users/update/info/${user_id}`, [username, firstname, lastname, bio])
            console.log(updateInfo)
        } catch (error) {
            console.log('error:', error)
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        console.log('editing stuff')
        setEdit(true)
    }

    const deactivateAccount = (e) => {
        e.preventDefault()
        console.log('deactivating account')
        try {

        } catch (error) {
            console.log('error:', error)
        }
    }

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting updated info')
        handleUpdate();
    }

    if (edit === false) {
        return (
            <div>
                <Typography>Settings</Typography>
                <form>
                    <label htmlFor="username">username:</label> <p>{user.username}</p>
                    <label htmlFor="firstname">firstname:</label> <p>{user.firstname}</p>
                    <label htmlFor="lastname">lastname:</label> <p>{user.lastname}</p>
                    <label htmlFor="bio">Bio:</label> <p>{user.bio}</p>
                    <Button onClick={handleEdit}>Edit</Button> <Button onClick={deactivateAccount}>Deactivate Account</Button>
                </form>
            </div>
        )
    } else {
        console.log('username', username)
        return (
            <div>
                <Typography
                variant='h2'
                >Settings</Typography>
                <form>
                    <TextField
                        variant="filled"
                        margin='normal'
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}>
                        {username}
                    </TextField><br />

                    <TextField
                        variant="filled"
                        margin='normal'
                        label='First Name'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}>
                        {firstname}
                    </TextField> <br />

                    <TextField
                        variant="filled"
                        margin='normal'
                        label='Last Name'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}>
                        {lastname}
                    </TextField><br />

                    <TextField
                        variant="filled"
                        margin='normal'
                        label="Bio"
                        value={bio}
                        onChange={(e)=>setBio(e.target.value)}>
                        {bio}
                    </TextField> <br />

                    <Button onClick={handleUpdate}>Submit</Button>
                </form>
            </div>
        )
    }
}

export default Settings