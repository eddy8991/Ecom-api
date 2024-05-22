const router = require('express').Router()
const authContoller = require('../controllers/authController')


router.post('/signup', authContoller.signup)


module.exports = router