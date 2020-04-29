const bcrypt = require('bcrypt');


const hashPassword = async(password) => {
    try{
        const salt = await bcrypt.genSalt(12)
        const password_hash = await bcrypt.hash(password, salt)
        return password_hash
    } catch(error){
        console.log('ERROR', error)
    }
}

const comparePasswords = async (initialPassword, passwordHash) =>{
    console.log(initialPassword, passwordHash)
    try{
        const match = await bcrypt.compare(initialPassword, passwordHash)
        return match
    } catch(error){
        console.log('ERROR', error)
    }
}

const loginRequired = (req, res, next) =>{
    if(req.user) return next()
    res.status(401).json({
        payload:null, 
        message: 'You need to be logged in for access'
    })
}

module.exports = {
    hashPassword, 
    comparePasswords, 
    loginRequired
}