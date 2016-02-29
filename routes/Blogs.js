var express = require('express');
var router = express.Router();

var Blog = require('../models/blogs');
//This "Blog" is reference to the Schema
router.route('/blogs')
	.post(function(req, res){
		console.log(req.body);
		var blog = new Blog();
		blog.author = req.body.author;
		blog.image = req.body.image;
		blog.date = req.body.date;
		blog.content = req.body.content;
		
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
		Blog.find(function(err, blogs){
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