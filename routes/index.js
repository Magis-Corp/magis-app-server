const express = require('express')

const router = express.Router()
const authRouter = require('./authRouter.js')

router
    .user("/auth", authRouter)

module.exports = router