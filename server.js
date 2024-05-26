const http = require('http');
const app = require('./app');
const { log } = require('console');
const port = 6800;
const server = http.createServer(app);
server.listen(port, ()=> {
    console.log("Server is Runing");
});