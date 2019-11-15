const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UserRouter = require('./routes/user.router')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

mongoose
	.connect('mongodb://localhost/dailykit', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connected to DB!')
	})
	.catch(err => {
		console.error(err)
	})

app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api/users', UserRouter)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
