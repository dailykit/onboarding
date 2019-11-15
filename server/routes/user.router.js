const router = require('express').Router()
const handler = require('../handlers/user.handler')

router.route('/register').post(handler.register)

module.exports = router
