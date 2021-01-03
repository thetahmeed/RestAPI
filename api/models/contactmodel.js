





// 0. It will helps you to validate user inputs
const mValidator = require('validator')

// 1. Importing mongoDB
const mMongoose = require('mongoose')

/*
// 2. Check database is connected or not 
const mDb = mMongoose.connection
// if not connected to mongoDB
mDb.on('error', (err) => {
    console.log('Not connected')
})
// if connected to mongoDB
mDb.once('open', () => {
    console.log('Connected to mongoDB')
})
*/

// 3. Create a schema
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

// 4. Create a model
const mContactsModel = mMongoose.model('Contact', mContactsSchema)

module.exports = mContactsSchema