const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const UserRouter = require('./routes/user.router')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api/users', UserRouter)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
