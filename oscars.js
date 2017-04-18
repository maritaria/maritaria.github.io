function getImdbForMovie(movie_id, callback) {
	const sparql = `
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?imdb_url
WHERE {
	wd:${movie_id} wdt:P345 ?imdb_url.
}`;
	var url = wdk.sparqlQuery(sparql);
	$.ajax({
		type: 'GET',
		url: url,
	}).done(function (data) {
		var cleaned = wdk.simplifySparqlResults(data);
		console.log(cleaned);
		callback(cleaned[0]);
	});
}

function getMovieStats(imdb_id, callback) {
	return $.ajax({
		url: 'https://www.omdbapi.com/?i=' + imdb_id, //tt4116284
	}).done(callback);
}
