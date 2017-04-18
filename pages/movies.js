(function () {
	var movieListTemplate = Nuterra.addTemplate('movie-list', 'templates/movie-list.mustache');
	var movieTemplate = Nuterra.addTemplate('movie', 'templates/movie.mustache');
	var movieExtendedTemplate = Nuterra.addTemplate('movie-extended', 'templates/movie-extended.mustache');

	movieListTemplate.addDependency(movieTemplate);

	var sortMovies_imdb = function() {
		var movies = $('.movie');
		var itemsLeft = movies.length;
		var scores = [];

		movies.each(function(index, item) {
			var id = $(item).data('id');
			getImdbForMovie(id, function(imdb_id) {
				getMovieStats(imdb_id, function(data){
					$(item).data('score', parseFloat(data.imdbRating));
					$(item).find('.title > .score').text(" - " + data.imdbRating);
					itemsLeft -= 1;
					if (itemsLeft == 0) {
						$('#main-content .movie').sort(function(a,b) {
						     return $(a).data('score') <= $(b).data('score');
						}).appendTo('#main-content');
					}
				});
			});
		});
	};
	var sortMovies_tomatoes = function() {
		var movies = $('.movie');
		var itemsLeft = movies.length;
		var scores = [];

		movies.each(function(index, item) {
			var id = $(item).data('id');
			getImdbForMovie(id, function(imdb_id) {
				getMovieStats(imdb_id, function(data){
					var score = null;
					for (var i = 0; i < data.Ratings.length; i++) {
						var rating = data.Ratings[i];
						if (rating.Source == 'Rotten Tomatoes') {
							score = rating.Value.substring(0, 2);
							break;
						}
					}

					$(item).data('score', parseFloat(score));
					$(item).find('.title > .score').text(" - " + score + "%");
					itemsLeft -= 1;
					if (itemsLeft == 0) {
						$('#main-content .movie').sort(function(a,b) {
						     return $(a).data('score') < $(b).data('score');
						}).appendTo('#main-content');
					}
				});
			});
		});
	};

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
				$('#main-content button.rank-imdb').click(sortMovies_imdb);
				$('#main-content button.rank-tomatoes').click(sortMovies_tomatoes);
			});
		} else {
			movieTemplate.render(Movies[id], function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
				$('#main-content button.open-data').click(handleMovieClick);
			});
		}
	});
	Nuterra.addPage('home', function() { Nuterra.showPage('movies'); });
})();
