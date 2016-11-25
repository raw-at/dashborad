var express = require('express');
var app = express();

//body-parser

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//handlebars for view engine
var handlebars = require('express-handlebars');
handlebars = handlebars.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//port
var port = process.env.PORT || 8080;

var morgan = require('morgan');

app.use(morgan('dev'));

app.get('/',function(req,res){

	res.render('dashboard');
});



app.listen(port,function(){

	console.log('Server is running')
})