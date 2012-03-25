$(document).ready(function(){
  $('.play').click(function(){
    player.playPause(); return false;
  });

  $('.next').click(function(){
    player.nextSong(); return false;
  });

  $('.prev').click(function(){
    player.prevSong(); return false;
  });

  $('.volUp').click(function(){
    player.volUp(); return false;
  });

  $('.volDown').click(function(){
    player.volDown(); return false;
  });
});