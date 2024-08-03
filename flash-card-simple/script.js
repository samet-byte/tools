$(function(){
  var maxCards = $('.card').length;
  // turn card
  for (var i = 1; i <= maxCards; ++i) {
    $('._' + i).click(function(){
      $(this).addClass('flipped');
      $(this).find('.front').addClass('showingBack');
      $(this).find('.front').css("z-index", 0);
      $(this).css("z-index", i);
    });
  }
  // reset stack
  $('#reset button').click(function(){
    $('.card').removeClass('flipped');
    $('.card').find('.front').removeClass('showingBack');
    $('.card').find('.front').css("z-index", 2);
    for (var j = 0; j < maxCards; ++j) {
      $('.card:eq(' + j + ')').css("z-index", maxCards - j);
    }
  });
});