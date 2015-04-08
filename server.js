var hapi = require('hapi');

var server = new hapi.Server();
server.connection( { port: 3000, address: 'localhost'});

var routes = require('./server/routes');
// Add the server routes
server.route(routes);

server.start(function() {
    console.log('Server started at http://localhost:' + server.info.port);
});
