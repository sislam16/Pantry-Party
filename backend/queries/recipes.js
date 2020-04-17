/*
Recipes Queries | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

const db = require('../database/db')

const getRecipeById = async (id) => {
    return await db.one('SELECT * FROM recipes WHERE id=$1', id)
}

/* EXPORT */
module.exports = {
    getRecipeById
}

