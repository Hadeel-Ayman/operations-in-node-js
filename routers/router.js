const express = require('express')
const User = require('../models/userModel')
const router = express.Router()

// post person
router.post('/person', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then((data) => res.status(200).send(data))
        .catch((error) => res.status(400).send(error))
})


// get person
router.get('/person', (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((e) => res.status(500).send(e))
})

// find one document
router.get('/person/:id', (req, res) => {
    const id = req.params.id

    User.findById(id).then((data) => {
        if (!data) {
            res.status(400).send('person not found')
        } else {
            res.status(200).send(data)
        }
    }).catch((e) => res.status(500).send(e))
})


// patch

router.patch('/person/:id', async (req, res) => {
    const id = req.params.id
    const keys = Object.keys(req.body)
    // const user = await User.findByIdAndUpdate(id, req.body, {
    //     new: true,
    //     runValidators: true
    // })

    const user = await User.findById(id)
    if (!user) {
        return res.status(400).send('user not found')
    }
    keys.forEach((item) => (user[item] = req.body[item]))

    await user.save()
})


// delete

router.delete('/person/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            res.status(400).send('user not found')
        } else {
            res.status(200).send('user is deleted')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

// login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }

})


module.exports = router