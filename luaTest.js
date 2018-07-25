var fs = require('fs');
var express = require('express');
var app = new express();

var scripts = {
    foo: {
        script: fs.readFileSync(__dirname + '/pdel.lua', {encoding:'utf8'})
    },
    // bar: {
    //     script: fs.readFileSync(__dirname + '/bar.lua', {encoding:'utf8'})
    // }	
};
var client = require('redis').createClient(6379,'192.168.21.119');
client.on('ready',function(res){
    console.log('ready');    
});
var lured = require('lured').create(client, scripts);
app.get('/',function(req,res){
	lured.load(function (err) {
	    if (err) { /* handler error */}
	    else {
	        // Do your cool stuff here
	        // Now you can safely do something like this:
	        client.multi()
	             .evalsha(scripts.foo.sha, 0)	
	             // .evalsha(scripts.bar.sha, 0)
	             .exec(function(err, replies) {
	                	res.send(replies)
	             });	
	    }
	});
});
app.listen(3333) 
// Load all scripts on to redis server.
