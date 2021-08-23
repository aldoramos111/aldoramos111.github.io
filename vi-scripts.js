var iframe = document.getElementById('embedvideo');
var player = $f(iframe);
var playButton = document.getElementById("closevid");
playButton.addEventListener("click", function() {
    player.api("play");
});