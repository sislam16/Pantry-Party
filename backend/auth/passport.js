const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { comparePasswords } = require('../auth/helpers')
const usersQueries = require('../queries/users')

passport.use(new localStrategy(async (username, password, done) => {
    try {
        const user = await usersQueries.getUserByUsername(username);
        if (!user) {
            return done(null, false)
        }
        console.log(user)
        const passMatch = await comparePasswords(password, user.password)
        if (!passMatch) {
            return done(null, false)
        }

        delete user.password;
        done(null, user)

    } catch (error) {
        done(error)
    }
}))

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser(async(user, done) =>{
    try{
        let retrievedUser = await usersQueries.getUserByUsername(user.username)
        delete retrievedUser.password
        done(null, retrievedUser)
    }catch(error){
        done(error, false)
    }
});

module.exports = passport;