var AppActions = require('../actions/AppActions');

module.exports = {
	searchMovies: function(movie){
		$.ajax({
			url: 'http://www.omdbapi.com/?s='+movie.title,
			type: 'GET',
			dataType: 'json',
			// cache: false,
			success: function(data){
				console.log(data.Search);
				AppActions.receiveMovieResults(data.Search);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(xhr);
				alert(err);
			}.bind(this)
		});
	}
}