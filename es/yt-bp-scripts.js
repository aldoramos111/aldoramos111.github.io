function StopEmbedVideo() {
    var $frame = $('iframe#embedvideo');

    // saves the current iframe source
    var vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', "https://www.youtube.com/embed/qidc9r8_IXo?rel=0");

};

$(document).ready(function() {
    $('.modal').click(function() {
        StopEmbedVideo();
    });
});
