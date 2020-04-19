const express = require('express');
const router = express.Router();
const eventsQueries = require('../queries/events')

//get all events 
router.get('/', async(req, res, next)=>{
    try{
        let allEvents = await eventsQueries.getAllEvents()
        res.json({
            payload: allEvents,
            message: 'Success. All events have been retrieved.'
        })
    } catch(error){
        res.status(500).json({
            payload:null, 
            message: 'Error. Unable to retrieve events'
        })
    }
});

//get event by id
router.get('/:event_id', async(req, res, next)=>{
    const event_id = req.params.event_id
    try{
        let eventById = await eventsQueries.getEventById(event_id)
        res.json({
            payload: eventById,
            message: 'Success. Event has been retrieved.'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve event'
        })
    }
});

// post a new event.
router.post('/new', async(req, res, next) =>{
    try{
        let postNewEvent = eventsQueries.createNewEvent()
        res.json({
            payload: postNewEvent,
            message: 'Success. Event has been posted.'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to post event.'
        })
    }
});

//update event
router.patch('/update/:event_id', async(req, res, next) =>{
    const event_id = req.params.event_id
    const {event_name, event_date, event_description, recipe_info} = req.body
    try{
        let updateEvents = eventsQueries.updateSingleEvent(event_id, event_name, event_date, event_description, recipe_info)
        res.json({
            payload: updateEvents, 
            message: 'Success. Event has been updated'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to update event.'
        })
    }
});

//delete event
router.delete('/remote', async(req, res, next)=>{
    try{
        let deleteEvent = eventsQueries.removeEvent()
        res.json({
            payload: deleteEvent,
            message: 'Success. Event has been deleted'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to delete event.'
        })
    }
});

module.exports = router;