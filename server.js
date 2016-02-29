var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/theBlog');

var blogRouter = require('./routes/blogs');

var Blog = require('./models/blogs')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home', {title: 'What up world!'} )
});
app.get('/about', function(req, res){
	res.render('about', {title: 'What up world!'} )
});
app.get('/pics', function(req, res){
	res.render('pics', {title: 'What up world!'} )
});
app.get('/resume', function(req, res){
	res.render('resume', {title: 'What up world!'} )
});

app.get('/blogs', function(req, res){
	Blog.find(function(err, blogs){
			if(err){
				console.log(err)
			} else {
			res.render('blogs', { blogs: blogs })	
			}
		})
	
});




var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});

router.get('/', function(req, res){
	res.json({ message: 'hooray! welcome to our api!'});
})

app.use('/api', blogRouter);
app.listen(port);
	console.log('Magic happens on port ' + port);