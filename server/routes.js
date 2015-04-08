var path = require('path');

var basePath = process.env.APP_DIR || ".";

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello World!!!');
        }
    }
]
