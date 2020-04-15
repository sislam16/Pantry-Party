const db = require('../database/db')

const getCalendarByUser = async (user_id) =>{
    return await db.one(`SELECT * FROM calendar WHERE user_id=$1 RETURNING *`, user_id)
}
const getCalendarByEventDate = async (event_date) =>{
    return await db.any(`SELECT * FROM calendar INNER JOIN events ON calendar.event_id = event.id WHERE event_date=$1`, event_date)
}

// const updateUserCalendar = async () =>{
//     const updateQuery = `UPDATE calendar SET `
//     return await 
// }