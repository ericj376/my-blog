var deleteBlog = function(){

	var id = $(event.target).closest('tr').attr('id');
	var blog = $(event.target).closest('tr');
	
	if(confirm("Are you sure you want to delete this blog?")){
		$.ajax({
			url: '/api/blogs/' + id,
			method: 'DELETE',
		}).done(function(){
			blog.remove();
		})
	}
}


$('.deleteBlog').on('click', deleteBlog);


var addBlog = function(event){
	event.preventDefault();

	var author = $('#author').val();
	var image = $('#image').val();
	var date = $('#date').val();
	var content = $('#content').val();
	var $table = $('#blogTable');

	var blog = {};
	blog.author = author;
	blog.image = image;
	blog.date = date;
	blog.content = content;

	
	
	$.ajax({
		url: '/api/blogs/',
		method: 'POST',
		data: blog
	}).done(function(data){
		console.log('I posted a blog', data);


		$table.append('<tr id=' + data._id + '>\
			<td>' + data.author +'</td>\
			<td>' + data.image + '</td>\
			<td>' + data.date + '</td>\
			<td>' + data.content + '</td>\
			<td><button type="button" class="btn btn-danger deleteBlog">Delete</button></td>\
			</tr>');
		$('.deleteBlog').on('click', deleteBlog);
		$('#author').val("");
		$('#image').val("");
		$('#date').val("");
		$('#content').val("");
	});
		
};	



$('#addBlog').on('click', addBlog);