import '../src/index.js';

const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', (e) => {
  // Save the caret position.
  let caretPos = input.selectionStart;
  const value = e.target.value;
  // Apply the input masking.
  e.target.value = new Intl.InputMask('credit-card-number').format(
    e.target.value,
  );
  // Restore the caret position while neutralizing the masking.
  if (value !== e.target.value) {
    caretPos += e.target.value.length - value.length;
  }
  input.selectionStart = caretPos;
  input.selectionEnd = caretPos;
});

button.addEventListener('click', () => {
  input.value = '';
});

document.querySelectorAll('.credit-card-number').forEach((td) => {
  td.textContent = new Intl.InputMask('credit-card-number').format(
    td.textContent,
  );
});
