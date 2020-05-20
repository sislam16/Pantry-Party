import React, { useState, useEffect } from 'react'
import EventsDisplayCard from '../events/EventsDisplayCard'
import axios from 'axios'

const EventComponentUD = ({ user }) => {

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

    }, [])

    const eventsThumbnail = eventsArr.map(el=>(
        <EventsDisplayCard
            id={el.id}
            event_name={el.event_name}
            event_date={el.event_date}
            event_description={el.event_description}
            recipe_info={el.event_description}
        />
    ))




    return (
        <div className = 'events-componentUD'>
            {eventsThumbnail}
        </div>
    )
}

export default EventComponentUD