import React from 'react'
import {Link} from 'react-router-dom'

const EventsDisplayCard = ({event_name, event_date}) => {
    console.log('name:', event_name)
    console.log('date:', event_date)

    return(
        <div >
            <h1>{event_name}</h1>
            <h3>{event_date}</h3>
        </div>
    )
}

export default EventsDisplayCard