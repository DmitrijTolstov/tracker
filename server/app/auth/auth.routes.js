import express from 'express'
import { authUser, registerUser } from './auth.controller.js'

const autRrouter = express.Router()

autRrouter.route('/login').post(authUser)
autRrouter.route('/register').post(registerUser)

export default autRrouter
