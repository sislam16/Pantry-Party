const db = require('../database/db')

const getItemById = async (id) => {
    return await db.one(`SELECT * FROM pantry WHERE id =$1`, id)
}