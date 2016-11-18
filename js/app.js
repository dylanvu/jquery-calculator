(() => {
  'use strict';

  const $screen = $('#screen');
  $screen.text('0');

  $('#clear').on('click', () => {
    $screen.text('0');
  });

  $('div.buttons').on('click', 'span:not("#clear"):not("#equals")', (event) => {
    const $target = $(event.target);
    if ($screen.text() === '0')
      $screen.text('');
    $screen.text($screen.text() + $target.text());
  });

  $('#equals').on('click', () => {
    const result = eval($screen.text().replace(/x/g,'*').replace(/%/g,'/'));
    $screen.text(result.toString());
  });
})();
