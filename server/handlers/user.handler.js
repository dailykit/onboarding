const User = require('../models/user.model')

const register = async (req, res) => {
	res.send(req.body)
}

module.exports = {
	register
}
