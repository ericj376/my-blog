var TwitterBox = React.createClass({
	propTypes: {
		tweetsArray: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},
	render: function() {
		var tweets = this.props.tweetsArray.map(function(t){
			return <TwitterCard screen_name={ t.screen_name }
								text={ t.text }
								profile_image_url={ t.profile_img }
								created_at={ t.created_at }/>
		});
		return (
			<div>
				<h4> Twitter Box </h4>
				{ tweets }
			</div>
		)
	}
});
