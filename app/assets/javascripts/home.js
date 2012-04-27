$(document).ready(function() {
  var player = $('#player');

  $('#play').click(function() {
    player.play();
    return false;
  });

  $('#next').click(function(){
    player.next();
    return false;
  });

  $('#previous').click(function(){
    player.previous();
    return false;
  });

  $('#volumeUp').click(function(){
    player.volume += 0.1;
    return false;
  });

  $('#volumeDown').click(function(){
    player.volume -= 0.1;
    return false;
  });

  $('.dropdown-toggle').dropdown();
});