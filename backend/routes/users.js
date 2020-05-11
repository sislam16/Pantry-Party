const express = require('express');
const router = express.Router();
const userQueries = require('../queries/users')
const {loginRequired} = require('../auth/helpers')

//retrieves all users
router.get('/', loginRequired,  async(req, res, next)=>{
    console.log(req.session)
    try{
        let allUsers = await userQueries.getAllUsers()
        res.json({
            payload: allUsers,
            message: 'Success, retrieved all users'
        });
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error, Unable to retrieve all users'
        })
    }
});

// //retrieves user by id
router.get('/id/:id', async(req, res, next)=>{
    const id = req.params.id
    try{
        let userById = await userQueries.getUserById(id)
        res.json({
            payload: userById,
            message: 'Succes! Retrieved user.'
        })
    } catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to retrieve user.'
        })
    }
})

//retrieves user by username
router.get('/username', async(req, res, next) =>{
    const username = req.body.user
    console.log('user:', username)
    try{
        let userByUsername = await userQueries.getUserByUsername(username)
        res.json({
            payload: userByUsername,
            message: 'Success! User retrieved.'
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            payload: error, 
            message: 'Error. Unable to retrieve user.'
        })
    }
})

//update user info
router.patch('/update/info/:id', async (req, res, next)=>{
    const id = req.params.id
    const { email, firstname, lastname, avatar, bio } = req.body

    try{
        let updateUserInfo = await userQueries.updateUserInfo(email, firstname, lastname, avatar, bio)
        res.json({
            payload: updateUserInfo,
            message: 'Success! User info has been updated.'
        })
    }catch(error){
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to update user info.'
        })
    }
});

//update user password
router.patch('/update/password/:id', async(req, res, next) =>{
    const id = req.params.id
    const {password} = req.body

    try{
        let updateUserPassword = await userQueries.updatePassword(password)
        res.json({
            payload: updateUserPassword,
            message: 'Success! User password has been updated!'
        })
    } catch(error){
        res.status(500).json({
            payload: null,
            message: 'Error. Unable to update password.'
        })
    }
});

module.exports = router;