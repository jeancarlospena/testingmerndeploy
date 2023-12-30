
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())

app.use(express.json())

app.get('/api', (req, res) => {
  res.json({ message: 'Hello There' })
})

const __dirname2 = path.resolve()

// set react dist folder
app.use(express.static(path.join(__dirname2, '/frontend/dist')))

// redirect non /api routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname2, 'frontend', 'dist', 'index.html'))
})

app.listen(3000, () => {
  console.log('App listening on port 3000. YaY!')
})