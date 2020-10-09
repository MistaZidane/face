// require Express application framework
const express = require('express');
// require Handlebars templating engine for Express
const exphbs  = require('express-handlebars');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const resData = require('./midlewares/midleware').resData;
const requestData = require('./midlewares/midleware').requestData;
require('dotenv').config();

const bodyParser = require('body-parser');

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
const deleteRouter = require('./routes/delete');
// define the app routes
// 
app.use('/verify',verifyRouter);
app.use('/register',registerRouter);
app.use('/delete',deleteRouter);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', createProxyMiddleware({ target: process.env.Target, changeOrigin: true, onProxyRes: resData, onProxyReq: requestData }));

// make a 404 error page
app.use(function (req, res) {
	res.status(404);
	res.render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
