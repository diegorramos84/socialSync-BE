const { Router } = require('express');

const eventController = require('../controllers/events');

const eventsRouter = Router()

eventsRouter.get('/', eventController.index)
eventsRouter.get('/:id', eventController.show)
eventsRouter.get('/search/:query', eventController.find)

module.exports = eventsRouter
