





// importing 'Auth' middleware
const mAuth = require('../middleware/auth')

const mExpress = require('express')
const mController = require('../controllers/user')

const mUserRoute = mExpress.Router()

mUserRoute.post('/signup', mController.singUpUser)
mUserRoute.post('/signin', mController.singInUser)

// adding 'auth' middleware here
mUserRoute.get('/all', mAuth, mController.allUser)

module.exports = mUserRoute

