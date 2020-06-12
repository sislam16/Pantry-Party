import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@material-ui/core'

const Settings = ({ user }) => {
    const [edit, setEdit] = useState(false)
    const [username, setUsername] = useState(user.username)
    const [firstname, setFirstname] = useState(user.firstname)
    const [lastname, setLastname] = useState(user.lastname)
    const [bio, setBio] = useState(user.bio)

    const handleUpdate = async () => {
        console.log('update info')
        try {
            let updateInfo = await axios.patch(`/api/users/update/info/`, { username, firstname, lastname, bio })
            console.log(updateInfo)
            setEdit(false)
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
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('submitting updated info')
    //     handleUpdate();
    // }

    if (edit === false) {
        return (
            <Container style={{marginTop:'20px'}}>
                <Typography variant='h3' style={{fontWeight:'bold', color:'#ed7902'}}>Settings</Typography><br />
                <form className='editInfo'>
                    <Typography variant='h6'style={{fontWeight:'bold'}}>username:</Typography>
                    <Typography variant='p'>{user.username}</Typography> <br />
                    <Typography variant='h6'style={{fontWeight:'bold'}}>firstname:</Typography>
                    <Typography variant='p'>{user.firstname}</Typography><br />
                    <Typography variant='h6'style={{fontWeight:'bold'}}>lastname:</Typography>
                    <Typography variant='p'>{user.lastname}</Typography><br />
                    <Typography variant='h6'style={{fontWeight:'bold'}}>Bio:</Typography>
                    <Typography variant='p'>{user.bio}</Typography><br/>
                 <Button onClick={handleEdit} >Edit</Button> <Button onClick={deactivateAccount}>Deactivate Account</Button>
                </form>
            </Container>
        )
    } else {
        console.log('username', username)
        return (
            <Container style={{marginTop:'20px'}}>
                <Typography
                    variant='h3'
                >Settings</Typography>
                <form className='editInfo'>
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
                        onChange={(e) => setBio(e.target.value)}>
                        {bio}
                    </TextField> <br />

                    <Button onClick={handleUpdate}>Submit</Button>
                </form>
            </Container>
        )
    }
}

export default Settings