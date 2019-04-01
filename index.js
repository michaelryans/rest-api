const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./routers/user.js')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api', userRouter)
app.get('/*', (req,res) => {
    res.status(404).send('not found')
})

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})