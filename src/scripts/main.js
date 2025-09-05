'use strict';

/**
 * Fixes form on pages as per task description
 *
 * @param {string} formSelector
 */
function fixForm(formSelector) {
  if (!formSelector || typeof formSelector !== 'string') {
    throw new Error('Invalid form selector');
  }

  const forms = document.querySelectorAll(formSelector);
  const inputSelector = 'input';

  for (const form of forms) {
    const inputs = form.querySelectorAll(inputSelector);

    for (const input of inputs) {
      input.insertAdjacentHTML(
        'beforebegin',
        '<label class="field-label" for="' +
          input.id +
          '">' +
          input.name.toUpperCase() +
          '</label>',
      );

      input.setAttribute(
        'placeholder',
        input.name.charAt(0).toUpperCase() + input.name.slice(1),
      );
    }
  }
}

fixForm('form'); // use html tag as selector
