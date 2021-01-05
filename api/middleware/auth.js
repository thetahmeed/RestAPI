





const mJsonWebToken = require('jsonwebtoken')

const auth = (req, res, next) => {
    try{
    
        const mToken = req.headers.authorization.split(' ')[1]
        const mDecode = mJsonWebToken.verify(mToken, 'SECRET')
        
        // we can find out the user by the url/route
        req.user = mDecode
        next()
        
    }catch(err){
        res.json({
            message: 'Authentication failed'
        })
    }
}

module.exports = auth