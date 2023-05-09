const { Router } = require('express');

const eventController = require('../controllers/events');
const authenticator = require("../middleware/authenticator")
const eventsRouter = Router()

eventsRouter.get('/', eventController.index)
eventsRouter.post('/', eventController.create)
eventsRouter.get('/:id', eventController.show)
eventsRouter.patch('/:id', eventController.update)
eventsRouter.get('/search/:query', eventController.find)

module.exports = eventsRouter
