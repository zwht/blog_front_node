/**
 * Created by zhaowei on 17/1/16.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./src/routes/app');

var app = express();
var theme = "blog";

app.use(express.static('themes/' + theme + '/static'));
app.use(express.static('src/static'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'themes/' + theme + '/views'));
app.set('view engine', 'jade');



routes(app);


var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;



    console.log('Example app listening at http://%s:%s', host, port);
});

