const db = require('../database/db')

const getRecipeById = async (id) => {
    return await db.one('SELECT * FROM recipes WHERE id=$1')
}