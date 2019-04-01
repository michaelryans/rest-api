const userRouter = require('express').Router()
const userController = require('../controllers/userController')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')
const {authorizationUser} = require('../middlewares/authorization')

userRouter.get('/users/', authentication, authorization, userController.getAll)
userRouter.get('/users/:id', authentication, authorizationUser, userController.findByPk)
userRouter.post('/users/', authentication, authorization, userController.create)
userRouter.delete('/users/:id', authentication, authorization, userController.deleteByPk)
userRouter.patch('/users/:id',authentication, authorizationUser, userController.patchByPk)
userRouter.put('/users/:id', authentication, authorizationUser,userController.putByPk)


userRouter.post('/register', (req,res) =>{
    console.log(req.headers.token)
    res.json('hahahah test')
})



userRouter.post('/login', userController.login)

module.exports = userRouter