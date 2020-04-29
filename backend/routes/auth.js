const express = require('express');
const router = express.Router();
const userQueries = require('../queries/users')
const authHelpers = require('../auth/helpers');
const passport = require('../auth/passport')

//post new user
router.post('/signup', async (req, res, next)=>{
    console.log('body', req.body)
    try{
        const passwordHash = await authHelpers.hashPassword(req.body.password)

        const userInfo ={
             email: req.body.email, 
             password: passwordHash, 
             username: req.body.username, 
             firstname: req.body.firstname, 
             lastname: req.body.lastname, 
             avatar:req.body.avatar, 
             bio: req.body.bio
         } 
 
         let newUser = await userQueries.createUser(userInfo)
         res.json({
             payload: newUser,
             message: 'Success! New user has been added.'
         })
     } catch(error) {
         console.log(error)
         res.status(500).json({
             payload: null, 
             message: 'Error. Unable to post user.'
         })
     }
 });

 router.post('/login', passport.authenticate('local'), (req, res, next) =>{
    console.log(req.body)
    res.json({
        payload: req.user, 
        message: 'user has successfully logged in'
    })
 });

 router.get('/logout', (req, res, next) =>{
    res.send('/logout route')
 });

 module.exports = router;