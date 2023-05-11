const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello hadeel')
})

require('../db/mongoose')

app.use(express.json())

const useRouter = require('../routers/router')
app.use(useRouter)


app.listen(port, () => console.log(`the port ${port}`))