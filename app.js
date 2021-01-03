





const mExpress = require('express')
const mMongoose = require('mongoose')
const mMorgan = require('morgan')
const mBodyParser = require('body-parser')                      // to extracts the data, those are given by the body
const mCors = require('cors')                                   // to access API from all port



// 1. Connecting with mongoDB
mMongoose.connect('mongodb+srv://tahmeedul:cK4H6VVF9fPQPYF6@cluster0.mvhfs.mongodb.net/contacts?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})

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

// 3. Create a schema
const mSchema = mMongoose.Schema

const mContactsSchema = new mSchema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minlength: 11
    }
})

// 4. Create a model
const mContactsModel = mMongoose.model('Contact', mContactsSchema)


// Emporting mContactsRoute
const mContactsRoute = require('./api/routes/contactsroute')

const mApp = mExpress()

// Using middleware
mApp.use(mCors())
mApp.use(mMorgan('dev'))
mApp.use(mBodyParser.urlencoded({extended: true}))
mApp.use(mBodyParser.json())


/*
// custom middleware
mApp.use((req, res, next) => {
    res.send('<h1>Coming soon...</h1>')
    // if you don't call the 'next()' then no below route will be exicute
    //next()                                                   
})
*/



mApp.use('/contacts', mContactsRoute)

mApp.get('/', (req, res) => {
    res.send('Hello World!')
    
})



const PORT = process.env.PORT || 8080
mApp.listen(PORT, () => {
    console.log(`I am on Port ${PORT}`)
})