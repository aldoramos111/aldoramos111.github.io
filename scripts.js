//Mobile Nav Toggle
function mobileNavToggle() {
    var element = document.getElementById("navList");
    element.classList.toggle("active");
}

function mobileNavTogglegit() {
    var element = document.getElementById("navList");
    element.classList.remove("active");
}

//Change nav color on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 160) {
        $(".vfx-header").addClass("darkHeader");
    } else {
        $(".vfx-header").removeClass("darkHeader");
    }
});

function StopEmbedVideo() {
    var $frame = $('iframe#embedvideo');

    // saves the current iframe source
    var vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', "https://www.youtube.com/embed/8ctRjR_DWAg?rel=0");

};

$(document).ready(function() {
    $('.modal').click(function() {
        StopEmbedVideo();
    });
});
/*
var iframe = document.getElementById('embedvideo');
var player = $f(iframe);
var playButton = document.getElementById("closevid");
playButton.addEventListener("click", function() {
    player.api("play");
});*/

