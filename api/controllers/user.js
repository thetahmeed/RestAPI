





// getting user model
const User = require('../models/User')

const singUpUser = (req, res, next) => {

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()
        .then(data => res.send('<h1>User created</h1>'))
        .catch(err => console.log(err))
}

const singInUser = (req, res, next) => {
    res.send('Hi old user')
}

const allUser = (req, res, next) => {
    
    User.find()
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
   
}

module.exports = {
    singUpUser,
    singInUser,
    allUser
}