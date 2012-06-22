var xmlrpc = require('xmlrpc')
var fs = require('fs')

// Creates an XML-RPC server to listen to XML-RPC method calls
var server = xmlrpc.createServer({ host: 'localhost', port: 9090 })

server.on('GetApprovedManifest', function (err, params, callback) {
	console.log('Method call params for \'GetApprovedManifest\': ' + params)

	fs.readFile('test.xml', function(err,data){
		if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		}

		//console.log(data.toString());

	// Send a method response with a value
	callback(null, [1, data.toString()]);
	});

})

server.on('GetManifest', function (err, params, callback) {
	console.log('Method call params for \'GetManifest\': ' + params)

	fs.readFile('test.xml', function(err,data){
		if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		}

		//console.log(data.toString());

	// Send a method response with a value
	callback(null, [1, data.toString()]);
	});

})

console.log('XML-RPC server listening on port 9090')

