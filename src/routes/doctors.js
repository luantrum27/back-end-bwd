const express = require('express')
const router = express.Router()

const doctorControllers = require('../app/controllers/DoctorControllers')

router.post('/signup', doctorControllers.signup)
router.post('/login', doctorControllers.login)
router.get('/', doctorControllers.show)

module.exports = router