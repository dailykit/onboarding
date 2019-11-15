const User = require('../models/user.model')

const register = async (req, res) => {
	try {
		const user = await new User(req.body)
		user.save((error, result) => {
			if (error) throw error
			return res.status(200).send({ success: true, data: result })
		})
	} catch (error) {
		return res.status(500).send({ success: false, error })
	}
}

module.exports = {
	register
}
