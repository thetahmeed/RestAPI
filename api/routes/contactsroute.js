





const mExpress = require('express')
const mContactsRoute = mExpress.Router()



// Importing controller
const {
    getAllContacts,
    postNewContact,
    getSingleContactById,
    updateContactById,
    deleteContactById
} = require('../controllers/contactscontroller')

// Getting all post
mContactsRoute.get('/', getAllContacts)

// Posting a new post
mContactsRoute.post('/', postNewContact)

// Getting a single post
mContactsRoute.get('/:id', getSingleContactById)

// Updating a post
mContactsRoute.put('/:id', (req, res, next) => {
    res.json({
        message: "Updating a post"
    })
})

// Deleting a post
mContactsRoute.delete('/:id', deleteContactById)







// Exporting mRoute
module.exports = mContactsRoute