





const mExpress = require('express')
const mContactsRoute = mExpress.Router()

// Importing model
const mContactsModel = require('../models/contactmodel')

// Getting all post
mContactsRoute.get('/', (req, res, next) => {

    mContactsModel.find()
                .then(data => res.status(200).json({data}))
                .catch(err => {
                    res.status(500).json({
                        message: "Error:",
                        error: err
                    })
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

    const contactmodel = new mContactsModel({
        // we can check validity here
        name: req.body.name,                                            // extracting data from the body
        phone: req.body.phone,
        email: req.body.email
    })

    contactmodel.save()
            .then(data => res.status('201').json(data))
            .catch(err => console.log(err))

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