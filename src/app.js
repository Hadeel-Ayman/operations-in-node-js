

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello hadeel')
})

require('../db/mongoose')

app.use(express.json())

// user
const userRouter = require('../routers/userrouter')
app.use(userRouter)

// service
const serviceRouter = require('../routers/servicerouter')
app.use(serviceRouter)

app.listen(port, () => console.log(`the port ${port}`))