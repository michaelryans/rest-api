const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    authentication: function(req,res,next) {
        try {
            const decoded = jwt.verify(req.headers.token, 'secret')
            req.authenticated = decoded
            console.log(req.authenticated)
            next()
        }
        catch {
            res.status(400).json('header not found')
        }
    }
}