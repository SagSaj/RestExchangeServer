var http = require('http');
var url = require('url');

http.createServer(function (req, res)
{
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var query = url.parse(req.url, true).query;
	res.end('Hello ' + (query.name ? query.name : 'stranger'));

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
