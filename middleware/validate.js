const users = require("../users/userDb")

function validateUserId() {
    return (req, res, next) => {
        users.getById(req.params.id)
        .then((user) => {
            if (user) {
                req.user = user
                next()
            } else {
                res.status(400).json({message: "invalid user id."})
            }
        })
        .catch(next)
    }
}

function validateUser() {
    return (req, res, next) => {
        if(!req.body.id || !req.body.name) {
            res.status(400).json({
                message: "missing user data"
            })
        } else if (!req.body.name) {
            res.status(400).json({
                message: "Missing required name field."
            })
        } else {
            next()
        }
    }
}

function validatePost() {
    return (req, res, next) => {
        if(!req.body.id || !req.body.text || req.body.user_id) {
           res.status(400).json({
               message: "missing post data"
           })
        } else if 
            (!req.body.text || req.body.user_id) {
                res.status(400).json({
                    message: "missing required text field"
                })
            } else {
                next()
            }
        }
    }



module.exports = {
    validateUserId,
    validateUser,
    validatePost,
}