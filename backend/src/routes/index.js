const { Router } = require('express')

const usersRoutes = require('./user.routes')
const movieRoutes = require('./movie.routes')
const tagsRoutes = require('./tags.routes')
const sessionsRouter = require('./sessions.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRouter)
routes.use('/movies', movieRoutes)
routes.use('/tags', tagsRoutes)

module.exports = routes
