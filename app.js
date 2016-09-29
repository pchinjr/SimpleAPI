var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use('/', router);

var routes = require('./routes/routes.js')(app);

router.get('/', function(req, res) {
    res.send('using Router()');
});

router.get('/api', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
});