const db = require('../database/db')

const getAllUsers = async() =>{
    return await db.any(`SELECT id, email, username, firstname, lastname, avatar, bio FROM users`)
}
const getUserByUsername = async (username) => {
    return await db.oneOrNone('SELECT * FROM users WHERE username=$1', username)
}

const getUserById = async (id) =>{
    return await db.oneOrNone('SELECT * FROM users WHERE id=$1', id)
}
const createUser = async (user) => {
    const insertQuery = `
    INSERT INTO users(email, password, username, firstname, lastname, avatar, bio) 
    VALUES ($1, $2, $3, $4, $5, $6,$7)
    RETURNING id, username, firstname, lastname, avatar, bio 
    `
    return await db.one(insertQuery, [user.email, user.password, user.username, user.firstname, user.lastname, user.avatar, user.bio])
}

const updateUserInfo = async (id, username, firstname, lastname, avatar, bio) => {
    const updateQuery = `
    UPDATE users SET username=$2, firstname=$3, lastname=$4, avatar=$5, bio=$6
    WHERE id=$1 
    `
    return await db.one(updateQuery, [id, username, firstname, lastname, avatar, bio])
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
    getUserByUsername,
    createUser,
    updateUserInfo,
    updatePassword,
    deleteUser
}