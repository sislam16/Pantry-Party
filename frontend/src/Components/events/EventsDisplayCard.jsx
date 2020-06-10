import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Typography, Button} from '@material-ui/core'

const EventsDisplayCard = ({event_name, event_date, event_description, id}) => {
    console.log('name:', event_name)
    console.log('date:', event_date)

    return(
        <Link to={`/broadcast/${id}`}>
        <Card>
           <div className='eventName' id={id}><Typography variant='h5'>{event_name}</Typography></div> 
           <div><Typography variant='h6'>{event_date}</Typography></div> 
           <div><Typography variant='p'>{event_description}</Typography></div>
           <div><Button>Start Broadcast</Button></div>
        </Card>
        </Link>
    )
}

export default EventsDisplayCard