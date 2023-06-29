
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

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('.scrollJS').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();  
  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
    $('#toTop').removeClass('arrow-down').addClass('arrow-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
      $('#toTop').removeClass('arrow-up').addClass('arrow-down');
    }
  }  
  lastScrollTop = st;
}
