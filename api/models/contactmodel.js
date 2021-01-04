





// 0. It will helps you to validate user inputs
const mValidator = require('validator')

// 1. Importing mongoDB
const mMongoose = require('mongoose')

// 2. Create a schema
const mSchema = mMongoose.Schema
const mContactsSchema = new mSchema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        unique: true                                    // one account per number
    },
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return mValidator.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    }
})

// 4. Create a model (Important: model name should be the same as this class name)
const contactsmodel = mMongoose.model('Contact', mContactsSchema)

module.exports = contactsmodel