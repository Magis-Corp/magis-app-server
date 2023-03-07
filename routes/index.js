const express = require('express')
const { login, register } = require('../Controllers/index.js')

const router = express.Router()

router
    .post('/auth/register', register)
    .post("/auth/login", login)

module.exports = router