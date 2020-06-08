const db = require('../database/db')


const getAllEvents = async() =>{

    return await db.any(`SELECT * FROM events;`)
}

const getEventById = async (id) => {
    return await db.one(`SELECT * FROM events WHERE id=$1`, id)
}

const getEventByUserId = async (user_id) => {
    return await db.any(`SELECT * FROM events WHERE user_id=$1`, user_id)
}

const getEventsByActive = async () => {
    return await db.any(`SELECT * FROM events WHERE active = true;`)
}

const createNewEvent = async (event) =>{
    const insertQuery = `INSERT INTO events(
        user_id,
        event_name, 
        event_date, 
        event_description, 
        recipe_id) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`
    return await db.none(insertQuery, [event.user_id, event.event_name, event.event_date, event.event_description, event.recipe_id])
}

const updateSingleEvent = async(event) => {
    let { event_name, event_date, event_description, recipe_id, active, broadcast_id } = event;
    try {
        let patchQuery = `UPDATE events SET `
        if (event_name) {
            patchQuery += `event_name = $/event_name/,`
        }
        if (event_date) {
            patchQuery += `event_date = $/event_date/,`
        }
        if (event_description) {
            patchQuery += `event_description = $/event_description/,`
        }
        if (event_date) {
            patchQuery += `event_date = $/event_date/,`
        }
        if (recipe_info) {
            patchQuery += `recipe_id = $/recipe_id/,`
        }
        if (active) {
            patchQuery += `active = $/active/,`
        }
        if (broadcast_id) {
            patchQuery += `broadcast_id = $/broadcast_id/,`
        }

        patchQuery = patchQuery.slice(0, patchQuery.length - 1);

        patchQuery += ` WHERE id = $/id/ RETURNING *;`
        return await db.one(patchQuery, event);
    } catch (err) {
        throw (err);
    }
}

const removeEvent = async (id) => {
    return db.one(`DELETE FROM events WHERE id = $1`, id)
}

module.exports = {
    getAllEvents,
    getEventById,
    getEventByUserId, 
    getEventsByActive,
    createNewEvent, 
    updateSingleEvent,
    removeEvent
}