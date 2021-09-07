import '../src/index.js';

const creditCardInput = document.querySelector('[name="credit-card"]');
const creditCardButton = document.querySelector('.credit-card-clear');
const ibanInput = document.querySelector('[name="iban"]');
const ibanButton = document.querySelector('.iban-clear');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('paste', (e) => {
    const maxLength = input.maxLength;
    input.maxLength = '';
    input.value = e.clipboardData.getData('text/plain');
    input.maxLength = maxLength;
  });
});

creditCardInput.addEventListener('input', (e) => {
  console.log(e)
  // Save the caret position.
  let caretPos = creditCardInput.selectionStart;
  const value = e.target.value;
  // Apply the input masking.
  e.target.value = new Intl.InputMask('credit-card-number').format(
    e.target.value,
  );
  // Restore the caret position while neutralizing the masking.
  if (value !== e.target.value) {
    caretPos += e.target.value.length - value.length;
  }
  creditCardInput.selectionStart = caretPos;
  creditCardInput.selectionEnd = caretPos;
});

ibanInput.addEventListener('input', (e) => {
  // Save the caret position.
  let caretPos = ibanInput.selectionStart;
  const value = e.target.value;
  // Apply the input masking.
  e.target.value = new Intl.InputMask(
    'international-bank-account-number',
  ).format(e.target.value);
  // Restore the caret position while neutralizing the masking.
  if (value !== e.target.value) {
    caretPos += e.target.value.length - value.length;
  }
  ibanInput.selectionStart = caretPos;
  ibanInput.selectionEnd = caretPos;
});

creditCardButton.addEventListener('click', () => {
  creditCardInput.value = '';
});

ibanButton.addEventListener('click', () => {
  ibanInput.value = '';
});

document.querySelectorAll('.credit-card').forEach((td) => {
  td.textContent = new Intl.InputMask('credit-card-number').format(
    td.textContent,
  );
});

document.querySelectorAll('.iban').forEach((td) => {
  td.textContent = new Intl.InputMask(
    'international-bank-account-number',
  ).format(td.textContent);
});

document.querySelectorAll('h2, h3').forEach((h2) => {
  const id = h2.textContent
    .replace(/[^\w]/g, '_')
    .replace(/_+/g, '_')
    .replace(/_$/, '');
  h2.id = id;
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.textContent = '🔗';
  a.classList.add('anchor');
  h2.append(a);
});
