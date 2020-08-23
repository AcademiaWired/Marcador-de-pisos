const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const os = require('os')
const {exec} = require('child_process')

const port = process.argv[2] || 9000
const app = express()
app.use(bodyParser.urlencoded({extended: false, limit: '50mb', parameterLimit:50000}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static(`${__dirname}/../public`))

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

app.post('/solveCBC', (req, res) => {
  const {adjList} = req.body
  const file = 'adjList.txt'
  const python = os.platform() == 'win32' ? 'py' : 'python3'
  fs.writeFileSync(file, JSON.stringify(adjList))
  exec(`${python} solveCBC.py ${file}`, (err, stdout) => {
    if(err) {
      console.log(err)
      res.send(null)
      return
    }
    res.send(stdout)
  })
})

app.post('/solveCP-SAT', (req, res) => {
  const {adjList} = req.body
  const file = 'adjList.txt'
  const python = os.platform() == 'win32' ? 'py' : 'python3'
  fs.writeFileSync(file, JSON.stringify(adjList))
  exec(`${python} solveCP-SAT.py ${file}`, (err, stdout) => {
    if(err) {
      console.log(err)
      res.send(null)
      return
    }
    res.send(stdout)
  })
})

app.put('/stopServer', (req, res) => {
  res.end('Stopping server :(\n')
  server.close()
})

