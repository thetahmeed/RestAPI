





//
const mBcrypt = require('bcrypt')

// getting user model
const User = require('../models/User')

const singUpUser = (req, res, next) => {

    mBcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
            res.json({
                message: "Error:",
                error: err
            })
        }else{
            res.json({
                hash
            })
        }
    })

    /*
    const newUser = new User({
        email: req.body.email,
        password: ""
    })

    newUser.save()
        .then(data => res.send('<h1>User created</h1>'))
        .catch(err => console.log(err))
    */
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