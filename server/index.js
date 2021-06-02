const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  setTimeout(() => res.send('Hello World!'), 600);
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

server.keepAliveTimeout = 1 // in ms