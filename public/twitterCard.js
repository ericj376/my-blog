var TwitterCard = React.createClass({
	getInitialState: function(){
		return {text: '', screen_name: '', created_at: '', profile_image_url: ''};
	},
	loadTweetsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){
		this.loadTweetsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	},
	render: function(){
	}
});

	render: function(){
		return (
			<div class="container">
        		<div class="row">
          			<div class="panel panel-default col-sm-4">
            			<div class="tweet-texts">
        				<p>This is a bunch of text for tweets</p>
        				<img src="data:image/png;base64,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">
        				</div>
        			</div>
      			</div>
      		</div>
			)
	}
});

React.render(<TwitterCard/>, document.getElementById('twitter-card'));