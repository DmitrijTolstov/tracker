import express from 'express'
import autRrouter from './app/auth/auth.routes.js'
import 'colors'
import morgan from 'morgan'

import dotenv from 'dotenv'

dotenv.config()
const app = express()
import { prisma } from './app/prisma.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'

async function main() {
	if (process.env.NODE_END === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', autRrouter)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV}: port - ${PORT}`.blue.bold
		)
	)
}

main()
// .then(async () => {
// 	await prisma.$disconnect()
// })
// .catch(async e => {
// 	console.log(e)
// 	await prisma.$disconnect()
// 	process.exit(1)
// })
