import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EventsDisplayCard from './EventsDisplayCard'
import { Typography, Container, Button } from '@material-ui/core'

const AllEvents = ({ user }) => {
    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            try {
                let { data } = await axios.get(`/api/events/user/${user.id}`)
                setAllEvents(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        getEvents();
    }, [])

    const allEventsThumbnails = allEvents.map(el => (
        <EventsDisplayCard
            id={el.id}
            event_name={el.event_name}
            event_date={el.event_date}
            event_description={el.event_description}
            recipe_id={el.recipe_id}
        />
    ))


    return (
        <div>
            <Container>
                <Typography variant='h3' style={{ fontWeight: 'bold', color: '#ed7902', marginTop:'20px' }}>All Events</Typography>
                <Link to='/events/new'><Button>Create Event</Button> </Link>
                <div className='allEventsDisplay'>
                {allEventsThumbnails}
                </div>
            </Container>
        </div>
    )
}
export default AllEvents