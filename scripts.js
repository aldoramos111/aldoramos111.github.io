//Swiper
const swiper = new Swiper('.swiper-container', {
  fadeEffect: { crossFade: true },
  effect: 'coverflow',
  coverflowEffect: {
    depth: 500
  },
  preventInteractionOnTransition: false,
  speed: 1500,
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
