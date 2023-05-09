const User = require('../models/User');

const bcrypt = require('bcrypt')

async function register (req, res) {
  try {
    const data = req.body

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS))

    data['password'] = await bcrypt.hash(data['password'], salt)

    const result = await User.create(data)

    res.status(201).send(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


module.exports = {
  register
}
