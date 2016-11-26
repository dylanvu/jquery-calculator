(function() {
  'use strict';

  const $screen = $('#screen');

  $screen.text('0');

  $('#clear').on('click', () => {
    $screen.text('0');
  });

  $('div.buttons').on('click', 'span:not("#clear"):not("#equals")', (event) => {
    if ($screen.text() === '0' || $screen.text() === 'Error') {
      $screen.text('');
    }
    const updatedScreen = $screen.text() + $(event.target).text();

    $screen.text(updatedScreen);
  });

  $('#equals').on('click', () => {
    const arithExp = $screen.text();
    let arithExpResult;

    try {
      arithExpResult = eval(arithExp.replace(/x/g, '*').replace(/÷/g, '/'));
    }
    catch (e) {
      arithExpResult = 'Error';
    }

    if (!Number.isFinite(arithExpResult)) {
      arithExpResult = 'Error';
    }

    $screen.text(arithExpResult);
  });

  // TODO: add parenthesis button and decimal
})();
