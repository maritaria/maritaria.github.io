(function () {
	var actorListTemplate = Nuterra.addTemplate('actor-list', 'templates/actor-list.mustache');
	var actorTemplate = Nuterra.addTemplate('actor', 'templates/actor.mustache');

	actorListTemplate.addDependency(actorTemplate);

	Nuterra.addPage('actors', function (id) {
		if (id == null) {
			var actors = [];
			for (var key in Actors) {
			    if (Actors.hasOwnProperty(key)) {
					actors.push(Actors[key]);
			    }
			}
			actorListTemplate.render({ actors: actors }, function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
			});
		} else {
			actorTemplate.render(Actors[id], function (rendered) {
				$('#main-content').html(rendered);
				$('#main-content .btn').button();
			});
		}
	});
})();
