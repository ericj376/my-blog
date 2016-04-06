var TwitterCard = React.createClass({
	getInitialState: function(){
		return {
			tweets: []
		}
	},
	loadTweetsFromServer: function(){
		var self = this;
		$.ajax({
			url: 'api/tweets/bernie',
			method: 'GET'
		}).done(function(data){
			self.setState({tweets: data})
		})
	},
	componentDidMount: function(){
		this.loadTweetsFromServer();
	},
	render: function(){
		// console.log(this.state.tweets)

		var twitterCards = this.state.tweets.map(function(tweet){
		return (
			<div className="media col-sm-3">
          <div className="media-left">
            <a href="#">
              <img className="img-circle" src={ tweet.profile_img } alt="..."/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ tweet.user_name }</h4>
            <p>{ tweet.text }</p>
            <p>{ tweet.created_at }</p>
          </div>
        </div>
      		
			)
	})
		return (
		<div className="panel panel-default">
			<div class="panel-body">
			
			 { twitterCards } 
			
			</div>
		</div>
			)
	}
});

React.render(<TwitterCard url="/api/tweets/bernie"/>, document.getElementById('twitter-card'));