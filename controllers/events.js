const Event = require('../models/Event');


async function index(req, res) {
  try {
    const events = await Event.getAll()
    res.status(200).json(events)
  } catch (error) {
      res.status(404).json({ error: error.message })
  }
}

async function show(req, res) {
  try {
    const id = req.params.id
    const event = await Event.getOneById(id)
    res.status(200).json(event)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

// find
async function find(req, res) {
  try {
    const query = req.params
    console.log(query, "controlelr query")
    const events = await Event.find(query)
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}



module.exports = {
  index, show, find
}
