const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authorization: function (req,res,next) {
        if(req.authenticated.role !== 'admin') {res.status(400).json('Not authorized')}
        else {
            next()
        }
    },
    authorizationUser: function (req,res,next) {
        User.findByPk(req.params.id) 
        .then(user => {
            //console.log(user.username)
            if(req.authenticated.role !== 'admin' && req.authenticated.username != user.username) {res.status(400).json('Not authorized')}
            else {
                next()
            }
        })
    }
}