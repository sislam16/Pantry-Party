import React, { useState, useEffect } from 'react'
import EventsDisplayCard from '../events/EventsDisplayCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, Typography } from '@material-ui/core'

const EventComponentUD = ({ user }) => {
    const [eventsArr, setEventsArr] = useState([])
    useEffect(() => {
        const getEvents = async () => {
            let user_id = user.id
            try {
                let { data } = await axios.get(`/api/events/user/${user_id}`)
                let events = data.payload
                setEventsArr(events)
            } catch (error) {
                console.log(error)
            }
        }
        getEvents();
    }, [])

    const eventsThumbnailAll = eventsArr.map(el => (
        <EventsDisplayCard
            id={el.id}
            event_name={el.event_name}
            event_date={el.event_date}
            event_description={el.event_description}
            recipe_id={el.recipe_id}
        />
    ))

    const newArr=[]
    const getFourEvents = () =>{
        for(let i=0; i <= 3; i++){
            if(eventsThumbnailAll[i]){
                newArr.push(eventsThumbnailAll[i])
            }
        }
    }

getFourEvents(eventsThumbnailAll)


    if (eventsArr.length === 0) {
        return (
            <div>
                <Link to='/events/new'><Button>Create Event</Button> </Link>
            </div>
        )
    } else {
        return (
            <Container>
                <Typography variant='h5' style={{fontWeight:'bold'}}>Upcoming Events</Typography> <br/>
                <div className='events-componentUD'>
                    {newArr}
                    <Link to='/events' className='allEventbtn'><Button>View Events</Button></Link>
                </div>
            </Container>

        )
    }
}
export default EventComponentUD