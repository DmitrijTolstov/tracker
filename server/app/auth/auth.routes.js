import express from 'express'
import { authUser } from './auth.controller.js'

const autRrouter = express.Router()

autRrouter.route('/login').post(authUser)

export default autRrouter
