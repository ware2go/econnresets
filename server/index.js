const express = require('express')
const app = express()
const port = 3000

app.keepAliveTimeout = 500 // in ms

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

