const express = require('express')
const Service = require('../models/serviceModel')
const auth = require("../middleware/auth")
const router = express.Router()


router.post('/services', auth, async (req, res) => {
    try {
        const service = new Service({ ...req.body, owner: req.user._id })
        await service.save()
        res.status(200).send(service)
    }
    catch (e) {
        res.status(400).send(e.message)
    }

})

router.get('/services', auth, async (req, res) => {
    try {
        const services = await Service.find({})
        res.status(200).send(services)
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/services/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const service = await Service.findOne({ _id: id, owner: req.user._id })
        if (!service) {
            return res.status(404).send('you not owner')
        }
        res.send(service)
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})

router.patch('/service/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id
        const service = await Service.findByIdAndUpdate({ _id }, req.body, {
            new: true,
            runvalidators: true
        })
        if (!service) {
            return res.status(404).send('No service')
        }
        res.status(200).send(service)
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})

router.delete('/service/:id', auth, async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id)
        if (!service) {
            res.status(404).send('No service is found')
        }
        res.status(200).send(service)
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router 