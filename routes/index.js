const router = require('express').Router()
const UserController = require('../Controllers/index.js')

router.post('/auth/register', Controller.register)
router.post("/auth/login", UserController.login)

module.exports = router