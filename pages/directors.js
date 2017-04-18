(function () {
	var directorListTemplate = Nuterra.addTemplate('director-list', 'templates/director-list.mustache');
	var directorTemplate = Nuterra.addTemplate('director', 'templates/director.mustache');

	directorListTemplate.addDependency(directorTemplate);

	Nuterra.addPage('directors', function (id) {
		if (id == null) {
			var directors = [];
			for (var key in Directors) {
			    if (Directors.hasOwnProperty(key)) {
					directors.push(Directors[key]);
			    }
			}
			directorListTemplate.render({ directors: directors }, function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
			});
		} else {
			directorTemplate.render(Directors[id], function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
			});
		}
	});
})();
