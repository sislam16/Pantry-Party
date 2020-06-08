import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField, Button, Typography } from '@material-ui/core'
import EventComponentUD from './EventsComponent'

const NewEvent = ({ user, cookbookArr }) => {
    // const [eventsArr, setEventsArr] = useState([])
    const [event_name, setEventName] = useState('')
    const [event_date, setEventDate] = useState('')
    const [event_description, setEventDescription] = useState('')
    const [recipe_id, setRecipeId] = useState('')
    const [newEvent, setNewEvent] = useState({})

    const createNewEvent = async (e) => {
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

    return (
        <div>
            <Typography
                variant='h3'>Create New Event</Typography>
            <form action="" className='newEvent-form' onSubmit={createNewEvent}>
                {/* <label htmlFor="eventName">Event Name:</label> */}
                <TextField variant='outlined' margin='normal' label='Event Name' type="text" name='event_name' onChange={(e) => setEventName(e.target.value)} />
                <br>
                </br>
                {/* {/* <label htmlFor="eventDate">Event Date:</label> */}
                <TextField variant='outlined' margin='normal' id='date' type="date" name='event_date' onChange={(e) => setEventDate(e.target.value)} />
                <br />
                {/* {/* <label htmlFor='eventDescription'>Event Description:</label> */}
                <TextField variant='outlined' margin='normal' type="text" name='event_description' label='Event Description' helperText="Please describe your event" onChange={(e) => setEventDescription(e.target.value)} />
                <br />
                {/* {/* <label htmlFor='recipe-Info'>Recipe Info:</label> */}
                {/* <TextField variant='outlined' margin='normal' type="number" name='recipe_id' onChange={(e) => setRecipeId(e.target.value)} /> <br /> */}
                <TextField
                    id="outlined-select"
                    select
                    label="Select Recipe"
                    // value={currency}
                    // onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {/* <option>Make a selection</option>
                    {cookbookArr.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))} */}
                </TextField> <br/>
                <Button>Create Event</Button>
            </form>
        </div>
    )
}

export default NewEvent