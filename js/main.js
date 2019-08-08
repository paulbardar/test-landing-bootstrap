$('#consultationModal').modal({
	show: false
})
$('.carousel').carousel({
	interval: 100000
})


var video = document.querySelector('.video-block__item');
var btn = document.getElementById('play-pause');

function togglePlayPause() {
	if(video.paused){
		btn.className = "pause";
		video.play();
	}
	else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function() {
	togglePlayPause();
}
