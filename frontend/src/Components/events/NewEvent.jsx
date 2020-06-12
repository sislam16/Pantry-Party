import React, { useState, useEffect, useParams } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import { TextField, Button, Typography, MenuItem, Container } from '@material-ui/core'
import EventComponentUD from './EventsComponent'

const NewEvent = ({ user }) => {
    const history = useHistory()

    const [event_name, setEventName] = useState('')
    const [event_date, setEventDate] = useState('')
    const [event_description, setEventDescription] = useState('')
    const [recipe_id, setRecipeId] = useState('')
    const [newEvent, setNewEvent] = useState({})
    const [cookbookArr, setCookbookArr] = useState([])

    useEffect(() => {
        const getUserCookbook = async () => {
            const user_id = user.id
            console.log(user_id)
            try {
                const { data } = await axios.get(`/api/recipes/user/${user_id}`)
                console.log('data', data)
                setCookbookArr(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        getUserCookbook()
    }, [])

    const recipeOptions = (arr) => {

        let newArr = arr.map(el => (
            <option key={el.id} value={el.id}>{el.recipe_name}</option>
        ))
        newArr.unshift(<option key='default' value='default'>Select Recipe</option>)
        return newArr

    }

    const createNewEvent = async (e) => {
        console.log('here')
        e.preventDefault();

        try {
            let bodyObj = {
                event_name: event_name,
                event_date: event_date,
                event_description: event_description,
                recipe_id: recipe_id
            }
            let response = await axios.post(`/api/events/new`, bodyObj)
            let event = response.data.payload
            history.push('/home')
        } catch (error) {
            console.log('error:', error)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setRecipeId(e.target.value)
    }

    return (

            <Container fixed style={{ height: '70vh', backgroundColor: '#ffffff', width: '50vw', marginTop:'20px'}}>
                <Typography
                    variant='h3' style={{color:'#ed7902', fontWeight:'bold'}} >Create Event</Typography>
                <form className='newEvent-form' >
                    <TextField variant='outlined' margin='normal' label='Event Name' type="text" name='event_name' onChange={(e) => setEventName(e.target.value)} />
                    <br>
                    </br>
                    <TextField variant='outlined' margin='normal' id='date' type="date" name='event_date' onChange={(e) => setEventDate(e.target.value)} />
                    <br />
                    <TextField variant='outlined' margin='normal' type="text" name='event_description' label='Event Description' helperText="Please describe your event" onChange={(e) => setEventDescription(e.target.value)} />
                    <br />
                    <TextField
                        id="outlined-select"
                        select
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                    >
                        {cookbookArr ? recipeOptions(cookbookArr) : <option>Select Recipe</option>}
                    </TextField> <br />
                    <Link to ='/cookbook/new'>Don't have a recipe? Create one here.</Link> <br/>
                    <Button onClick={createNewEvent}>Create Event</Button>
                </form>
            </Container>
    )
}

export default NewEvent