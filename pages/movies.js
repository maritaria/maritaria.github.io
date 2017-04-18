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
				data.BoxOffice = data.BoxOffice.substring(1);//Trim $
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
	Nuterra.addPage('home', function() { Nuterra.showPage('movies'); });
})();
