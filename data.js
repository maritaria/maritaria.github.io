//id: http://www.wikidata.org/entity/
function buildIndex(target) {
	for (var k in target){
	    if (target.hasOwnProperty(k)) {
			target[k].local_id = k;
	    }
	}
}

Directors = {
	chris_mckay: { name: 'Chris McKay', id: 'Q17091099' },
	rupert_sanders: { name: 'Rupert Sanders', id: 'Q17091099' },
	jordan_vogt: { name: 'Jordan Vogt-Roberts', id: 'Q17091099' },
};
buildIndex(Directors);

Actors = {
	ralph_fiennes: { name: 'Ralph Fiennes', id: 'Q28493' },
	zach_galifianakis: { name: 'Zach Galifianakis', id: 'Q139325' },
	rosario_dawson: { name: 'Rosario Dawson', id: 'Q228692' },
	michael_cera: { name: 'Michael Cera', id: 'Q309555' },
	will_arnett: { name: 'Will Arnett', id: 'Q355116' },
	siri: { name: 'Siri', id: 'Q582159' },
	arnold_schwarzenegger: { name: 'Arnold Schwarzenegger', id: 'Q2685' },
	takeshi_kitano: { name: 'Takeshi Kitano', id: 'Q26372' },
	scarlett_johansson: { name: 'Scarlett Johansson', id: 'Q34436' },
	juliette_binoche: { name: 'Juliette Binoche', id: 'Q106275' },
	kaori_momoi: { name: 'Kaori Momoi', id: 'Q442924' },
	chin_han: { name: 'Chin Han', id: 'Q938855' },
	pilou_asbaek: { name: 'Pilou Asbaek', id: 'Q117906' },
	michael_pitt: { name: 'Michael Pitt', id: 'Q352540' },
	tom_hiddleston: { name: 'Tom Hiddleston', id: 'Q295803' },
};
buildIndex(Actors);

Genres = {
	scary: { name: 'Eng' },
	actie: { name: 'Actie' },
	animatie: { name: 'Animatie' },
	avontuur: { name: 'Avontuur' },
};
buildIndex(Genres);

Ratings = {
	geweld: { name: 'Geweld', icon: 'http://biosdrachten.nl/kw/geweld.gif' },
	eng: { name: 'Eng', icon: 'http://biosdrachten.nl/kw/eng.gif' },
	taal: { name: 'Taal', icon: 'http://biosdrachten.nl/kw/taal.gif' },
};
buildIndex(Ratings);

function minutes(hours, minutes) { return (hours * 60) + minutes; }

Movies = [];
function addMovie(movie) {
	Movies.push(movie);
	movie.local_id = Movies.length - 1;
}
addMovie({
	id: 'Q22575835',
	title: 'Ghost in the Shell 3D',
	duration: minutes(2, 15),
	minimum_age: 12,
	page_url: 'http://www.biosdrachten.nl/getInfo.asp?1000002001',
	scraped_url: 'https://web.archive.org/web/20170412112647/http://www.biosdrachten.nl/getInfo.asp?1000002001',
	showings: [
		new Date('2017-04-13T21:45:00'),
		new Date('2017-04-13T21:45:00'),
		new Date('2017-04-14T19:00:00'),
		new Date('2017-04-15T18:45:00'),
		new Date('2017-04-15T21:45:00'),
		new Date('2017-04-16T18:45:00'),
		new Date('2017-04-17T21:45:00'),
		new Date('2017-04-18T19:00:00'),
		new Date('2017-04-19T18:45:00'),
		new Date('2017-04-19T21:45:00'),
		new Date('2017-04-20T18:45:00'),
	],
	directors: [
		Directors.rupert_sanders
	],
	actors: [
		Actors.arnold_schwarzenegger,
		Actors.takeshi_kitano,
		Actors.scarlett_johansson,
		Actors.juliette_binoche,
		Actors.kaori_momoi,
		Actors.chin_han,
		Actors.pilou_asbaek,
		Actors.michael_pitt,
	],
	ratings: [
		Ratings.geweld,
		Ratings.taal,
		Ratings.eng,
	],
	genres: [
		Genres.actie,
		Genres.avontuur,
	],
});
addMovie({
	id: 'Q23013169',
	title: 'De Lego Batman Film 2D',
	duration: minutes(2, 5),
	minimum_age: 6,
	page_url: 'http://www.biosdrachten.nl/getInfo.asp?1000001937',
	scraped_url: 'https://web.archive.org/web/20170412112615/http://www.biosdrachten.nl/getInfo.asp?1000001937',
	showings: [
		new Date('2017-04-13T13:00:00'),
		new Date('2017-04-14T13:00:00'),
		new Date('2017-04-15T12:45:00'),
		new Date('2017-04-16T13:00:00'),
		new Date('2017-04-17T10:15:00'),
		new Date('2017-04-17T12:45:00'),
		new Date('2017-04-18T13:00:00'),
		new Date('2017-04-19T13:15:00'),
		new Date('2017-04-20T13:00:00'),
		new Date('2017-04-21T10:15:00'),
		new Date('2017-04-21T12:45:00'),
	],
	directors: [
		Directors.chris_mckay
	],
	actors: [
		Actors.ralph_fiennes,
		Actors.zach_galifianakis,
		Actors.rosario_dawson,
		Actors.michael_cera,
		Actors.will_arnett,
		Actors.siri,
	],
	ratings: [
		Ratings.geweld,
	],
	genres: [
		Genres.actie,
	],
});
addMovie({
	id: 'Q21203766',
	title: 'Kong Skull Island',
	duration: minutes(2, 25),
	minimum_age: 12,
	page_url: 'http://www.biosdrachten.nl/getInfo.asp?1000001952',
	scraped_url: 'https://web.archive.org/web/20170412112644/http://www.biosdrachten.nl/getInfo.asp?1000001952',
	showings: [
		new Date('2017-04-13T21:45:00'),
		new Date('2017-04-13T21:45:00'),
		new Date('2017-04-14T19:00:00'),
		new Date('2017-04-15T18:45:00'),
		new Date('2017-04-15T21:45:00'),
		new Date('2017-04-16T18:45:00'),
		new Date('2017-04-17T21:45:00'),
		new Date('2017-04-18T19:00:00'),
		new Date('2017-04-19T18:45:00'),
		new Date('2017-04-19T21:45:00'),
		new Date('2017-04-20T18:45:00'),
	],
	directors: [
		Directors.jordan_vogt
	],
	actors: [
		Actors.tom_hiddleston,
	],
	ratings: [
		Ratings.geweld,
		Ratings.taal,
		Ratings.eng,
	],
	genres: [
		Genres.actie,
		Genres.avontuur,
	],
});
