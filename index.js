// require Express application framework
const express = require('express');
// require Handlebars templating engine for Express
const exphbs  = require('express-handlebars');
// require 'request' module that allows to make external HTTP requests
const request = require('request');

const app = express();
const bodyPaser = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(bodyPaser.json());
app.use(express.static(__dirname + '/public'));

// use Handlebars as templating engine instead of Express default one
app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');
const verifyRouter = require('./routes/verify');
const registerRouter = require('./routes/register');
// define the app routes

app.use('/verify',verifyRouter);
app.use('/register',registerRouter);

app.get('/', function(req, res) {

	// request the data from third party API
	request({ method: 'GET',uri: 'https://immense-shore-43563.herokuapp.com/api/verify'}, 	function (error, resp, body) {
  		// if the response is an error, display the error page
      if (error) {
      	res.render('pages/error', { error: err });
    	}
    	// otherwise render the home page with the fetched data
    	else {
    		res.render('pages/home', { kings: JSON.parse(body) });
    	}
    }
  );
});
 

// make a 404 error page
app.use(function (req, res) {
	res.status(404);
	res.render('pages/404');
});

// handle other errors
// app.use(function (err, req, res) {
//   res.status(500);
//   res.render('pages/error', { error: err });
// });
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
