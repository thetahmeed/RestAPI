





const mValidator = require('validator')
const mMongoose = require('mongoose')


const mSchema = mMongoose.Schema

const mUserSchema = new mSchema({
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return mValidator.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    },
    password: String
})

const User = mMongoose.model('User', mUserSchema)

module.exports = User