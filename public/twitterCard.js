var TwitterCard = React.createClass({
	render: function() {
		return (
			<div>
				<div className="panel panel-default">
				<div className="panel-header">
				<img src={this.props.profile_image_url}
				className="img-thumbnail"/> 
				<p>{this.props.screen_name}</p>
					<div className="panel-body">
					{ this.props.text }
					{ this.props.created_at } 
					</div>
				</div>
			</div>
		</div>
		)
	}
});