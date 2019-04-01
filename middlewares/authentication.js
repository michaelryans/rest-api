const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports = {
    authentication: function(req,res,next) {
        try {
            const decoded = jwt.verify(req.headers.token, process.env.SECRET)
            req.authenticated = decoded
            console.log(req.authenticated)
            next()
        }
        catch {
            res.status(400).json('header not found')
        }
    }
}