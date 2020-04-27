const db = require('../database/db')

const getAllEvents = async() =>{
    return await db.any( `SELECT * FROM events;`)
}

const getEventById = async(id) =>{
    return await db.one(`SELECT * FROM events WHERE id=$1`, id)
}

const getEventByUserId = async (user_id) =>{
    return await db.any(`SELECT * FROM events WHERE user_id=$1`, user_id)
}

const createNewEvent = async (event) =>{
    const insertQuery = `INSERT INTO events(event_name, event_date, event_description, recipe_info) 
    VALUES ($2, $3, $4, $5)`
    return await db.none(insertQuery, [event.event_name, event.event_date, event.event_description, event.recipe_info])
}

const updateSingleEvent = async(id, event_name, event_date, event_description, recipe_info) => {
    const updateQuery = `
    UPDATE events 
    SET event_name=$2, event_date=$3, event_description=$4, recipe_info=$5 
    WHERE id=$1`

    return await db.one(updateQuery, [id, event_name, event_date, event_description, recipe_info])
}

const removeEvent = async(id) => {
    return db.one(`DELETE FROM events WHERE id = $1`, id)
}

module.exports = {
    getAllEvents, 
    getEventById,
    getEventByUserId, 
    createNewEvent, 
    updateSingleEvent, 
    removeEvent
}