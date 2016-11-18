(() => {
  'use strict';

  const $screen = $('#screen');

  $('#clear').on('click', () => {
    $screen.text('');
  });

  $('div.buttons').on('click', 'span:not("#clear"):not("#equals")', (event) => {
    const $target = $(event.target);
    $('#screen').text($screen.text() + $target.text());
  });

  // $('#equals').on('click', () => {
  //
  // });
})();
