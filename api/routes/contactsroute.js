





const mExpress = require('express')
const mContactsRoute = mExpress.Router()



// Importing controller
const {getAllContacts, postNewContact} = require('../controllers/contactscontroller')

// Getting all post
mContactsRoute.get('/', getAllContacts)

// Posting a new post
mContactsRoute.post('/', postNewContact)

// Getting a single post
mContactsRoute.get('/:id', (req, res, next) => {

})

// Updating a post
mContactsRoute.put('/:id', (req, res, next) => {
    res.json({
        message : "Updating a post"
    })
})

// Deleting a post
mContactsRoute.delete('/:id', (req, res, next) => {
    res.json({
        message : "Deleting a post"
    })
})







// Exporting mRoute
module.exports = mContactsRoute