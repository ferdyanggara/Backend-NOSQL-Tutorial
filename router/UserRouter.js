const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')

router.get('/add-user', userController.addUser)

router.get('/all-users', userController.allUsers)

router.get('/spec-user/:id', userController.specUser)

module.exports = router;