const db = require('../database/db')

const getUserById = async (id) => {
   return await db.one('SELECT * FROM users WHERE id=$1', id)
}

const createUser  = async (email, password, firstname, lastname) => {
    const insertQuery =`
    INSERT INTO users(email, password, firsname, lastname) 
    VALUES ($1, $2, $3, $4) 
    RETURNING * 
    `
    return await db.one(insertQuery, [email, password, firstname, lastname])
}

const updateUserInfo = async (id, email, firstname, lastname) =>{
    const updateQuery = `
    UPDATE users SET email=$2, firstname=$3, lastname=$4
    WHERE id=$1 
    RETURNING *
    `
    return await db.one(updateQuery, [id, email, firstname, lastname])
}

const updatePassword = async(id, password) =>{
    const updateQuery = `
    UPDATE users
    SET password =$2
    WHERE id = $1
    RETURNING *
    `
    return await db.one(updateQuery, [id, password])
}

const deleteUser = async (id) => {
    return await db.one('DELETE FROM users WHERE id = $1', id)
}

module.exports = {
    getUserById, 
    createUser, 
    updateUserInfo,
    updatePassword,
    deleteUser
}