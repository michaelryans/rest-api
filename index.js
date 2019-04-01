const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require('./routers/user.js')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api', userRouter)
app.get('/*', (req,res) => {
    res.status(200).send('More information check -- <a href="https://github.com/michaelryans/rest-api"> https://github.com/michaelryans/rest-api </a> ')
})

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})