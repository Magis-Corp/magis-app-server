const express = require('express')
const { login, register } = require('../Controllers/index.js')

const authRouter = express.Router()

authRouter
    .post('/register', register)
    .post("/login", login)

module.exports = router