module.exports = function (router, db) {
    const userModel = require('../models/user')
    const info = new userModel(db)
    router.get('/', (req, res) => {
        res.render('user')
    })

    router.route('/student')
        .get((req, res, next) => {
            info.getUser()
                .then(data => {
                    res.json(data)
                    next()
                })
        })
        .post((req, res, next) => {
            info.postUser(req)
                .then(data => {
                    res.json(data)
                    next()
                })
        })
        .put((req, res, next) => {
            info.putUser(req)
                .then(data => {
                    res.json(data)
                    next()
                })

        })
        .delete((req, res, next) => {
            info.deleteUser(req)
                .then(data => {
                    res.json(data)
                    next()
                })
        })
}