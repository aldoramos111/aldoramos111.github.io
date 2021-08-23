$('#closevid').click(function() {
  $("#embedvideo").attr('src', $("#embedvideo", parent).attr('src') + '&autoplay=1'); 
});