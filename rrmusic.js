var soundcloudIframe = function(id, width, height) {
	width = width || '100%';
	height = height || '450';

	var str = '<iframe width="'+width+'" height="'+height+'" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+id+'&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
	return str;
}

module.exports = soundcloudIframe;