





const mExpress = require('express')
const mContactsRoute = mExpress.Router()


// Getting all post
mContactsRoute.get('/', (req, res, next) => {

    // extracting data from the body
    const name = req.body.name
    const email = req.body.email

    res.json({
        name,
        email
        /*
        or
        name: name
        email: email
        */ 
    })
})

// Getting a single post
mContactsRoute.get('/:id', (req, res, next) => {

    const id = req.params.id

    res.json({
        message : id
    })
})


// Posting a new post
mContactsRoute.post('/', (req, res, next) => {
    res.json({
        message : "Posting a post"
    })
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