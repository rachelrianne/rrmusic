var rrmusic = require('./rrmusic');
var http = require('http');
var jquery = require('jquery');

var songs = [
	{ title: 'Killed Ya',
		artist: 'Daniel Wilson',
		id: '162098560',
		width: '',
		height: '300'
	}, 
	{ title: 'Definition of Infinity',
		artist: 'Yasiin Gaye',
		id: '136740372',
		width: '50%',
		height: '300'
	},
	{ title: 'Down from the Rafters',
		artist: 'Hundred Waters',
		id: '135470336',
		width: '50%',
		height: '300'
	}
]

// Create Server and Page
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'utf8'});
  res.write('<div id="music">');
  for (var i = 0; i < songs.length; i++) {
  	res.write(rrmusic(songs[i].id, songs[i].width, songs[i].height));
  };
  res.write('</div>');
}).listen(8080);
