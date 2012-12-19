$(document).ready(function() {
  // Colors in order of showing:
  var colors = ['#f4f2d2', '#638759', '#81a677', /** can break here */
                '#f4f2d2', '#f25d50', '#b83f31']
  var index = 0;
  // Reveal right?
  var right = true;
  // Have both been shown?
  var shown = false;

  $('.open').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log('Opened');
    var target = right ? '#rightcontent' : '#leftcontent';
    var other = right ? '#leftcontent' : '#rightcontent';
    var direction = right ? 'right' : 'left';
    var div = $(this).attr('id').split('_').pop();

    $(target).css({ 'backgroundColor': colors[index] });
    $(target + ' > div').stop().animate({ opacity: 1.0 }, 300);
    $(other + '> div').stop().animate({ opacity: .25 }, 300);
    if (shown) {
      $(target).stop().hide('slide', { direction: direction }, 300);
    }
    if (right) {
      $('#middlebox').stop().animate({ left: '0' }, 300);
      right = false;
      shown;
    } else {
      $('#middlebox').stop().animate({ left: '12em' }, 300);
      right = true;
      shown = true;
    }
    $(target + ' > div').hide();
    $(target + ' > ' + div).show();
    $(target).stop().show('slide', { direction: direction }, 300);

    index += 1;
    if (index >= colors.length) {
      index = 0;
    }
  });
});
