





const mJsonWebToken = require('jsonwebtoken')

const auth = (req, res, next) => {
    try{
        console.log('I am here 1')
        const mToken = req.headers.authorization.split(' ')[1]
        console.log('I am here 1')
        const mDecode = mJsonWebToken.verify(mToken, 'SECRET')
        console.log('I am here 1')
        // we can find out the user by the url/route
        req.user = mDecode
        next()
        console.log('I am here 1')
    }catch(err){
        res.json({
            message: 'Authentication failed'
        })
    }
}

module.exports = auth