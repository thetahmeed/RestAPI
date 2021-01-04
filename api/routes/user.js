





const mExpress = require('express')
const mController = require('../controllers/user')

const mUserRoute = mExpress.Router()

mUserRoute.post('/signup', mController.singUpUser)
mUserRoute.post('/signin', mController.singInUser)
mUserRoute.get('/all', mController.allUser)

module.exports = mUserRoute

