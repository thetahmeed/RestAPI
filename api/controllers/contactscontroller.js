





// Importing model
const mContactsModel = require('../models/contactmodel')

const getAllContacts = (req, res, next) => {
    mContactsModel.find()
        .then(data => res.status(200).json({ data }))
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })
}

const postNewContact = (req, res, next) => {
    const contactmodel = new mContactsModel({
        // we can check validity here
        name: req.body.name,                                            // extracting data from the body
        phone: req.body.phone,
        email: req.body.email
    })

    contactmodel.save()
        .then(data => res.status('201').json(data))
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })
}

const getSingleContactById = (req, res, next) => {
    let getId = req.params.id

    mContactsModel.findById(getId)
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })
}

const updateContactById = (req, res, next) => {

    // getting id
    let getId = req.params.id

    // getting updated data
    let updatedData = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    mContactsModel.findByIdAndUpdate(getId, { $set: updatedData })
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })

}

const deleteContactById = (req, res, next) => {

    let getId = req.params.id
    mContactsModel.findByIdAndRemove(getId)
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
                message: "Error:",
                error: err
            })
        })
}


module.exports = {
    getAllContacts,
    postNewContact,
    getSingleContactById,
    updateContactById,
    deleteContactById
}