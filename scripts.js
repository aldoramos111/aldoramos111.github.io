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
    $frame.attr('src', vidsrc);

};

$(document).ready(function() {
    $('.modal').click(function() {
        StopEmbedVideo();
    });
});


