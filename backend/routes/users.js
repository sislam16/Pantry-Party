const express = require('express');
const router = express.Router();
const userQueries = require('../queries/users')

//retrieves all users
router.get('/', async(req, res, next)=>{
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

//retrieves user by id
router.get('/:id', async(req, res, next)=>{
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
    };

//post new user
router.post('/new', async(req, res, next)=>{
    try{
        let postNewUser = await userQueries.postNewUser()
        res.json({
            payload: postNewUser,
            message: 'Success! New user has been posted.'
        })
    } catch(error) {
        res.status(500).json({
            payload: null, 
            message: 'Error. Unable to post user.'
        })
    }
});

//update user info
router.patch('/update/info/:id', async(req, res, next)=>{
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