const express = require('express')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

//   server.get('/a', (req, res) => {
//     return app.render(req, res, '/a', req.query)
//   })

//   server.get('/b', (req, res) => {
//     return app.render(req, res, '/b', req.query)
//   })

//   server.get('/portfolio/:id', (req, res) => {
//     return app.render(req, res, '/portfolio', { id: req.params.id })
//   })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})