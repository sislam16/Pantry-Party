const db = require('../database/db')

const getAllUsers = async() =>{
    return await db.any(`SELECT * FROM users`)
}
const getUserById = async (id) => {
    return await db.one('SELECT * FROM users WHERE id=$1', id)
}

const createUser = async (email, password, firstname, lastname) => {
    const insertQuery = `
    INSERT INTO users(email, password, firsname, lastname, avatar, bio) 
    VALUES ($1, $2, $3, $4, $5, $6) 
    `
    return await db.one(insertQuery, [email, password, firstname, lastname])
}

const updateUserInfo = async (id, email, firstname, lastname, avatar, bio) => {
    const updateQuery = `
    UPDATE users SET email=$2, firstname=$3, lastname=$4, avatar=$5, bio=$6
    WHERE id=$1 
    `
    return await db.one(updateQuery, [id, email, firstname, lastname, avatar, bio])
}

const updatePassword = async (id, password) => {
    const updateQuery = `
    UPDATE users
    SET password =$2
    WHERE id = $1
    `
    return await db.one(updateQuery, [id, password])
}

const deleteUser = async (id) => {
    return await db.one('DELETE FROM users WHERE id = $1', id)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserInfo,
    updatePassword,
    deleteUser
}