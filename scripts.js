$(document).ready(function() {
  $('#html-edit').keyup(function(e) {
    setTimeout(function() {
      $('#target-container').html($('#html-edit').val());
    }, 500);
  });

  $('#css-edit').keyup(function(e) {
    setTimeout(function() {
      var css = $('#css-edit').val();
      css = css.replace('body', '#target-container');
      console.log(css);
      $('#custom-styles').html(css);
    });
  });

  $('#js-run').click(function() {
    eval($('#js-edit').val());
  });
});
