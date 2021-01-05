





// to create a token to ckeck user is logged in or not
const mJsonWebToken = require('jsonwebtoken')

// to dcryprt user password
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
            const newUser = new User({
                email: req.body.email,
                password: hash
            })
        
            newUser.save()
                .then(data => res.status(201).send('<h1>User created</h1>'))
                .catch(err => console.log(err))
        }
    })
}

const singInUser = (req, res, next) => {
    let userEmail = req.body.email
    let userPassword = req.body.password

    
    User.findOne({email: userEmail})
        .then(data => {
             // checking email is used or not
            if(data){
                // password is matched ot not
                mBcrypt.compare(userPassword, data.password, (err, result) => {
                    if(err){
                        res.json({
                            message: "Error:",
                        })
                    }

                    if(result){
                        
                        // we create the token if log in is successful
                        let mToken = mJsonWebToken.sign(
                            {email: data.email, _id: data._id}, 
                            'SECRET', 
                            {expiresIn: '2h'}
                            )

                        res.status(200).json({
                            message: 'Log in complete',
                            token: mToken
                        })
                    }else{
                        res.send('Worng password')
                    }

                })
            }else{
                res.send('User not exist')
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })

}

const allUser = (req, res, next) => {
    
    User.find()
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => console.log(err))
   
}

module.exports = {
    singUpUser,
    singInUser,
    allUser
}