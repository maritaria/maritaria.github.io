(function () {
	var movieListTemplate = Nuterra.addTemplate('movie-list', 'templates/movie-list.mustache');
	var movieTemplate = Nuterra.addTemplate('movie', 'templates/movie.mustache');
	var movieExtendedTemplate = Nuterra.addTemplate('movie-extended', 'templates/movie-extended.mustache');

	movieListTemplate.addDependency(movieTemplate);

	var handleMovieClick = function() {
		var id = $(this).data('id');
		var button = $(this);
		button.prop('disabled', true);
		var container = $(this).closest('.movie');
		getImdbForMovie(id, function(imdb_id) {
			getMovieStats(imdb_id, function(data){
				movieExtendedTemplate.render(data, function(rendered) {
					button.remove();
					container.find('.movie-info').append(rendered);
					var posterWrap = container.find('.movie-poster');
					container.find('.poster').appendTo(posterWrap);
				});
			});
		});
	}
	Nuterra.addPage('movies', function (id) {
		if (id == null) {
			movieListTemplate.render({ movies: Movies }, function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
				$('#main-content button.open-data').click(handleMovieClick);
			});
		} else {
			movieTemplate.render(Movies[id], function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
				$('#main-content button.open-data').click(handleMovieClick);
			});
		}
	});
})();

var a = {
	"Title":"The LEGO Batman Movie",
	"Year":"2017",
	"Rated":"PG",
	"Released":"10 Feb 2017",
	"Runtime":"104 min",
	"Genre":"Animation, Action, Adventure",
	"Director":"Chris McKay",
	"Writer":"Seth Grahame-Smith (screenplay), Chris McKenna (screenplay), Erik Sommers (screenplay), Jared Stern (screenplay), John Whittington (screenplay), Seth Grahame-Smith (story by), Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)",
	"Actors":"Will Arnett, Michael Cera, Rosario Dawson, Ralph Fiennes","Plot":"Bruce Wayne must not only deal with the criminals of Gotham City, but also the responsibility of raising a boy he adopted.",
	"Language":"English",
	"Country":"USA, Denmark",
	"Awards":"1 win & 1 nomination.",
	"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
	"Ratings":[
		{"Source":"Internet Movie Database","Value":"7.6/10"},
		{"Source":"Rotten Tomatoes","Value":"91%"},
		{"Source":"Metacritic","Value":"75/100"}
	],
	"Metascore":"75",
	"imdbRating":"7.6",
	"imdbVotes":"33,115",
	"imdbID":"tt4116284",
	"Type":"movie",
	"DVD":"N/A",
	"BoxOffice":"$158,818,072.00",
	"Production":"Warner Bros. Pictures",
	"Website":"http://www.legobatman.com/",
	"Response":"True"
};
