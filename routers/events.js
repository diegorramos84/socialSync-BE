const { Router } = require('express');

const eventController = require('../controllers/events');

const eventsRouter = Router()

eventsRouter.get('/search/:query', eventController.find)


module.exports = eventsRouter
