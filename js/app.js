(() => {
  'use strict';

  let text = '';

  $('#clear').on('click', () => {
    $('#screen').text('');
    text = '';
  });

  const $span = $('<span>');
  $('div.buttons').on('click', 'span', (event) => {
    const $target = $(event.target);
    if ($target.is('#clear') || $target.is('#equals'))
      return;
    console.log($target.text());
    text += $target.text();
    $span.text(text);
    $('#screen').append($span);
  });

})();
