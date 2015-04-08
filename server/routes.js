var path = require('path');

var basePath = process.env.APP_DIR || ".";

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file(path.join(basePath, '/public/index.html'));
        }
    },
    {
        method: 'GET',
        path: '/{input}',
        handler: function(request, reply){
            reply(request.params.input)
        }
    }
]
