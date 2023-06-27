
function togglePlay(VideoId, BtnID) {
  const video = document.getElementById(VideoId);
  const circlePlayButton = document.getElementById(BtnID);
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
  });
  video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
  });
}

