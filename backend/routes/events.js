const express = require('express');
const router = express.Router();
const eventsQueries = require('../queries/events')

//get all events 
router.get('/', async (req, res, next) => {
    try {
        let allEvents = await eventsQueries.getAllEvents()
        res.json({
            payload: allEvents,
            message: 'Success. All events have been retrieved.'
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to retrieve events'
        })
    }
});

//get events by active
router.get('/active', async (req, res, next) => {
    try {
        let eventsByActive = await eventsQueries.getEventsByActive()
        res.json({
            payload: eventsByActive,
            message: 'Success. All active events have been retrieved.'
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to retrieve active events'
        })
    }
})

//get event by id
router.get('/:event_id', async (req, res, next) => {
    const event_id = req.params.event_id
    try {
        let eventById = await eventsQueries.getEventById(event_id)
        res.json({
            payload: eventById,
            message: 'Success. Event has been retrieved.'
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to retrieve event'
        })
    }
});

//get event by user_id
router.get('/user/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id
    try {
        let eventByUser = await eventsQueries.getEventByUserId(user_id)
        res.json({
            payload: eventByUser,
            message: 'Success. Events by user has been retrieved.'
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to retrieve events by user'
        })
    }
})


// post a new event.
router.post('/new', async (req, res, next) => {
    try {
        const user_id = req.body.user_id;
        const event_name = req.body.event_name;
        const event_date = req.body.event_date;
        const event_description = req.body.event_description;
        const recipe_info = req.body.recipe_info;
        let postNewEvent = eventsQueries.createNewEvent({
            user_id,
            event_name,
            event_date,
            event_description,
            recipe_info
        })
        res.json({
            payload: postNewEvent,
            message: `Success. Event ${event_name} has been posted.`
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to post event.'
        })
    }
});

//update event
router.patch('/update/:event_id', async (req, res, next) => {
    const id = req.params.event_id
    try {
        let updatedEvent = eventsQueries.updateSingleEvent({
            id, 
            ...req.body
        })
        res.json({
            payload: updatedEvent,
            message: `Success. Event ${id} has been updated`
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to update event.'
        })
    }
});

//delete event
router.delete('/remote', async (req, res, next) => {
    try {
        let deleteEvent = eventsQueries.removeEvent()
        res.json({
            payload: deleteEvent,
            message: 'Success. Event has been deleted'
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to delete event.'
        })
    }
});

module.exports = router;