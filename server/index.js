import express from 'express'
import bodyParser from 'body-parser'

// Create the express app
const app = express()
const router = express.Router()

// Configure API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/', function(req, res) {
  res.json({ message: "API Initialized!"})
})

app.use('/api', router)

// Set up the port
const API_PORT = process.env.PORT || 3001;
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))
