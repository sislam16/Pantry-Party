import React, { useState, useEffect } from 'react'
import EventsDisplayCard from '../events/EventsDisplayCard'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const EventComponentUD = ({user}) => {
    const [eventsArr, setEventsArr] = useState([])
    useEffect(() => {
        const getEvents = async () => {
            let user_id = user.id
            try {
                let { data } = await axios.get(`/events/user/${user_id}`)
                let events = data.payload
                setEventsArr(events)
                console.log(eventsArr)
            } catch (error) {
                console.log(error)
            }
        }
        // getEvents()
    }, [])

    const eventsThumbnail = eventsArr.map(el=>(
        <EventsDisplayCard
            id={el.id}
            event_name={el.event_name}
            event_date={el.event_date}
            event_description={el.event_description}
            recipe_id={el.recipe_id}
        />
    ))

console.log('thumbnail', eventsThumbnail)
console.log('hey', eventsArr)

if(eventsArr.length === 0){
    return(
        <div>
       <Link to='/events/new'><Button>Create Event</Button> </Link>
        </div>
    )
} else{
    return (
        <div className = 'events-componentUD'>
            {eventsThumbnail}
        </div>
    )
}
}
export default EventComponentUD