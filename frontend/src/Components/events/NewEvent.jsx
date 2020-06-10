import React, { useState, useEffect, useParams } from 'react'
import axios from 'axios'
import { TextField, Button, Typography, MenuItem } from '@material-ui/core'
import EventComponentUD from './EventsComponent'
import { Autocomplete } from '@material-ui/lab/';

const NewEvent = ({ user }) => {
    console.log('user', user)
    // const [eventsArr, setEventsArr] = useState([])
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
    console.log(cookbookArr)


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
            setNewEvent(event)
        } catch (error) {
            console.log('error:', error)
        }
    }
    const handleChange = (e) =>{
        e.preventDefault()
        setRecipeId(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div style={{ justifyContent: 'center' }}>
            <Typography
                variant='h3'>Create New Event</Typography>
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
                    // label="Select Recipe"
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                  {cookbookArr ? recipeOptions(cookbookArr):  <option>Create Recipe</option>}
                </TextField> <br />
                <Button onClick={createNewEvent}>Create Event</Button>
            </form>
        </div>
    )
}

export default NewEvent