const Event = require('../models/Event');




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
  find
}
