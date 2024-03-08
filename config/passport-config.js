import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

function initialize(passport, getUser, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUser(email)
    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (password == user.password) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) { 
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.userID))
  passport.deserializeUser((userID, done) => {
    return done(null, getUserById(userID))
  })
}

export default initialize