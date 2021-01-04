





const singUpUser = (req, res, next) => {
    res.send('Hi new user')
}

const singInUser = (req, res, next) => {
    res.send('Hi old user')
}

const allUser = (req, res, next) => {
    res.send('Hi all user')
}

module.exports = {
    singUpUser,
    singInUser,
    allUser
}