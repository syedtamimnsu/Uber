const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const blacklistTokenModel = require('../models/blacklistToken.model')




// user register routes
router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], userController.registerUser)



// user login routes
router.post('/login', [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], userController.loginUser)



//user profile routes
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

// user logout routes
router.get('/logout', authMiddleware.authUser, userController.logoutUser)



module.exports = router;