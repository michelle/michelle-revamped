$(document).ready(function() {
  // Colors in order of showing:
  var colors = [['#f4f2d2', 'pale'],
                ['#638759', 'darkgreen'],
                ['#81a677', 'lightgreen']];/** can break here
                ['#f4f2d2', 'pale'],
                ['#f25d50', 'lightred'],
                ['#b83f31', 'darkred']];*/
  var index = 0;
  // Reveal right?
  var right = true;

  $('.open').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log('Opened');
    var target = right ? '#rightcontent' : '#leftcontent';
    var other = right ? '#leftcontent' : '#rightcontent';
    var direction = right ? 'right' : 'left';
    var div = $(this).attr('id').split('_').pop();


    $(other + '> div').stop().animate({ opacity: .15 }, 300, function() {
      $(target + ' > div').stop().animate({ opacity: 1.0 }, 300);
    });
    (function(index) {
      $(target).stop().hide('slide', { direction: direction }, 300,
        function() {
          $(target).css({ 'backgroundColor': colors[index][0] });
          $(target + ' > div').hide();
          $(target + ' > #' + div).removeClass().addClass(colors[index][1]).show();
          $(target).stop().show('slide', { direction: direction }, 300);
        }
      );
    })(index);

    if (right) {
      $('#middlebox').stop().animate({ left: '-12em' }, 300);
      right = false;
    } else {
      $('#middlebox').stop().animate({ left: '0em' }, 300);
      right = true;
    }

    index += 1;
    if (index >= colors.length) {
      index = 0;
    }
  });
});
