import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Typography, Button} from '@material-ui/core'

const EventsDisplayCard = ({event_name, event_date, event_description, id}) => {

    return(    
        <Card style={{ backgroundColor: '#fdbd10', border:'2px solid black', margin:'5px', width:'300px', height:'150px'}}>
           <div className='eventName' id={id}><Typography variant='h5'>{event_name}</Typography></div> 
           <div><Typography variant='p' style={{fontSize:'16px'}}>{event_date}</Typography></div> 
           <div><Typography variant='p'>{event_description}</Typography></div>
           <div><Link to={`/broadcast/${id}`}><Button>Start Broadcast</Button></Link></div>
        </Card>
    )
}

export default EventsDisplayCard