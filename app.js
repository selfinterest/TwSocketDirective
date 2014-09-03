/**
 * Created by twatson on 9/3/14.
 */

var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require("path");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.get('/', function (req, res) {
	res.render("index");
});

app.use(router);



server.listen(3000);


io.on("connection", function(socket){
	socket.emit("/models/ls", "somedata" );
});
