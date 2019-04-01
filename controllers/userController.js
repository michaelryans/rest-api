const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class userController {
    static getAll(req,res) {
        User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static findByPk(req,res) {
        User.findByPk(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static create(req,res) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        })
        .then(created => {
            res.status(200).json(created)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static deleteByPk(req,res) {
        User.findByPk(req.params.id)
        .then(result => {
            return result.destroy()
        })
        .then(deleted => {
            res.json({message: `Successfully deleted user data with id ${req.params.id}`})
        })
    }
    
    static patchByPk(req, res) {
        User.findByPk(req.params.id)
        .then(result => {
            result.username = req.body.username
            result.email = req.body.email
            result.password = req.body.password
            result.role = req.body.role

            return result.save()
        })
        .then(saved => {
            res.json(saved)
        })
        .catch(err => {
            res.json(err)
        })
    }

    static putByPk(req,res) {
        User.findByPk(req.params.id)
        .then(result => {
            result.username = req.body.username,
            result.email = req.body.email,
            result.password = req.body.password

            return result.save()
        })
        .then(saved => {
            res.json(saved)
        })
        .catch(err => {
            res.json(err)
        })
    }


    static login(req,res) {
        User.findOne({where: {username:req.body.username}})
        .then(user => {
            if(!user) {res.status(401).json('ngga ada tuh')}
            else {
                const verification = bcrypt.compareSync(req.body.password, user.password)
                if (!verification) {res.status(401).json('password ngga sama tuh')}
                else {
                    //token = jwt.sign({data yang mau di hash}, secret key)
                    const token = jwt.sign({
                        username:user.username,
                        email: user.email,
                        role: user.role
                    }, process.env.SECRET)

                    req.headers.token = token
                    user.dataValues.token = token
                    res.status(200).json(user)
                }
            }
        })
        .catch(err => {
            res.status(500).json({message: 'error'})
        })
    }
}

module.exports = userController