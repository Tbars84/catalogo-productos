const jsonServer = require('json-server')
const server = jsonServer.create();
const db = require('./backservices.json');

const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
    console.log(req.headers)
    next()
})
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})