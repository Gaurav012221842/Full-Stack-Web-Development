const http = require('http');
// const requestHandler = require('./route'); // Assuming 'route.js' is in the same directory
const route = require('./route'); 
console.log(route.Day);
const server = http.createServer(route.hand);
server.listen(4000);
       