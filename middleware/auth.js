const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token)
        const decode = jwt.verify(token, 'hadeel')
        console.log(decode)


        const user = await User.findOne({ _id: decode._id, tokens: token })
        console.log(user)
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    }
    catch (e) {
        res.status(401).send({ error: 'authenticate Please!' })
    }
}
module.exports = auth