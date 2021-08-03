//Swiper
const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  fadeEffect: {
    crossFase: true
  },
  preventInteractionOnTransition: false,
  speed: 800,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  loop: true,
  autoplay: {
   delay: 3500,
   disableOnInteraction: false
},
});



    function StopEmbedVideo() {
      var $frame = $('iframe#embedvideo');

     // saves the current iframe source
     var vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src',''); 

       // sets it back to the correct link so that it reloads immediately on the next window open
       $frame.attr('src', vidsrc);

    }

       $(document).ready(function() {
      $('.modal').click(function() {
        StopEmbedVideo();
      });
    });

var iframe = document.getElementById('embedvideo');

// $f == Froogaloop
var player = $f(iframe);

// bind events
var playButton = document.getElementById("closevid");
playButton.addEventListener("click", function() {
  player.api("play");
});

//Mobile Nav Toggle

function mobileNavToggle() {
  var element = document.getElementById("navList");
  element.classList.toggle("active");
}
