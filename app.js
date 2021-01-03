





const mExpress = require('express')
const mMongoose = require('mongoose')
const mMorgan = require('morgan')
const mBodyParser = require('body-parser')                      // to extracts the data, those are given by the body
const mCors = require('cors')                                   // to access API from all port


// Importing mContactsRoute
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