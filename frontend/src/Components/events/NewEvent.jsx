import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventComponentUD from './EventsComponent'

const NewEvent = ({user}) => {
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
            let response  = await axios.post(`/api/events/new`, bodyObj)
            let event = response.data.payload
            setNewEvent(event)
        } catch (error) {
            console.log('error:', error)
        }
    }

    return (
        <div>
            <form action="" className='newEvent-form' onSubmit={createNewEvent}>
                <label htmlFor="eventName">Event Name:</label>
                <input type="text" name='event_name' onChange={(e) => setEventName(e.target.value)} />
                <br>
                </br>
                <label htmlFor="eventDate">Event Date:</label>
                <input type="date" name='event_date' onChange={(e) => setEventDate(e.target.value)} />
                <br />
                <label htmlFor='eventDescription'>Event Description:</label>
                <input type="text" name='event_description' onChange={(e) => setEventDescription(e.target.value)} />
                <br />
                <label htmlFor='recipe-Info'>Recipe Info:</label>
                <input type="number" name='recipe_id' onChange={(e) => setRecipeId(e.target.value)} />
                <button>Create</button>
            </form>
        </div>
    )
}

export default NewEvent