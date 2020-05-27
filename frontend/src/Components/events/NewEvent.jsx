import React from 'react'
import axios from 'axios'


const NewEvent = () =>{
return(
    <div>
        <form action="" className='newEvent-form'>
            <label htmlFor="eventName">Event Name:</label>
            <input type="text"/>
            <label htmlFor="eventDate">eventDate</label>
            <input type ="date"/>
            <button>Create</button>
        </form>
    </div>
)
}

export default NewEvent