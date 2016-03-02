var express = require('express');
var router = express.Router();

var Blog = require('../models/blog');
//This "Blog" is reference to the Schema
router.route('/blogs')
		.post(function(req, res){
		var u = req.user 
		console.log(req.user._id || 'no user ID found')
		var blog = new Blog();
		blog.author = req.body.author;
		blog.image = req.body.image;
		blog.date = req.body.date;
		blog.content = req.body.content;
		blog.creator = req.user._id || 'anon user._id';
		console.log("CREATING BLOG: ", blog)
		blog.save(function(err, blog){
			if(err){
			console.log(err)
			} else {
				console.log(blog);
			res.json(blog)

			}
		})	
	})

	.get(function(req, res){
		Blog.find()
		.populate('creator')
		.exec(function(err, blogs){
			if(err){
				console.log(err)
			} else {
				res.json(blogs)
			}
		})
	})

router.route('/blogs/:blog_id')

	.get(function(req, res){
		Blog.findById(req.params.blog_id, function(err, blog){
			if(err){
				console.log(err);
			
			} else {
				res.json(blog);
			}
		})
	})

	.put(function(req, res){
		Blog.findById(req.params.blog_id, function(err, blog){
			if(err){
				console.log(err)
			} else {
				blog.author = req.body.author ? req.body.author : blog.author;
				blog.image = req.body.image ? req.body.image : blog.image;
				blog.date = req.body.date ? req.body.date : blog.date;
				blog.content = req.body.content ? req.body.content : blog.content;

				blog.save(function(err){
					if(err){
						console.log(err);
					}

					res.json({ message: 'Blog updated!'});
				})
			}
			
		})
	})

	.delete(function(req, res){
		Blog.remove({
			_id: req.params.blog_id
		}, function(err, blog){
			if(err){
				console.log(err);
			} else {
				res.json({ message: 'Successfully deleted'});

			}
		})
	})

	module.exports = router;