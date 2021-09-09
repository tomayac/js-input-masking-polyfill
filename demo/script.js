import '../src/index.js';

const creditCardInput = document.querySelector('[name="credit-card"]');
const creditCardButton = document.querySelector('.credit-card-clear');
const ibanInput = document.querySelector('[name="iban"]');
const ibanButton = document.querySelector('.iban-clear');
const phoneInput = document.querySelector('[name="phone"]');
const phoneButton = document.querySelector('.phone-clear');
const countrySelect = document.querySelector('#country');
const isbnInput = document.querySelector('[name="isbn"]')
const isbnButton = document.querySelector('.isbn-clear')
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('paste', (e) => {
    if (!(input.maxLength >= 0)) {
      return;
    }
    const maxLength = input.maxLength;
    input.maxLength = '';
    input.value = e.clipboardData.getData('text/plain');
    input.maxLength = maxLength;
  });
});

creditCardInput.addEventListener('input', (e) => {
  if (e.inputType === 'deleteContentBackward') {
    e.target.value = e.target.value.trim();
    return;
  }
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
  if (e.inputType === 'deleteContentBackward') {
    e.target.value = e.target.value.trim();
    return;
  }
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

const phoneNumberInput = (e) => {
  if (e.inputType === 'deleteContentBackward') {
    phoneInput.value = phoneInput.value.trim();
    return;
  }
  // Save the caret position.
  let caretPos = phoneInput.selectionStart;
  const value = phoneInput.value;
  // Apply the input masking.
  phoneInput.value = new Intl.InputMask('phone-number', {
    locale: countrySelect.value,
  }).format(phoneInput.value);
  // Restore the caret position while neutralizing the masking.
  if (value !== phoneInput.value) {
    caretPos += phoneInput.value.length - value.length;
  }
  phoneInput.selectionStart = caretPos;
  phoneInput.selectionEnd = caretPos;
};

countrySelect.addEventListener('change', phoneNumberInput);

phoneInput.addEventListener('input', phoneNumberInput);

isbnInput.addEventListener('input', (e) => {
  if (e.inputType === 'deleteContentBackward') {
    e.target.value = e.target.value.trim();
    return;
  }
  // Save the caret position.
  let caretPos = isbnInput.selectionStart;
  const value = e.target.value;
  // Apply the input masking.
  e.target.value = new Intl.InputMask(
    'isbn-number',
  ).format(e.target.value);
  // Restore the caret position while neutralizing the masking.
  if (value !== e.target.value) {
    caretPos += e.target.value.length - value.length;
  }
  isbnInput.selectionStart = caretPos;
  isbnInput.selectionEnd = caretPos;
});

creditCardButton.addEventListener('click', () => {
  creditCardInput.value = '';
});

ibanButton.addEventListener('click', () => {
  ibanInput.value = '';
});

phoneButton.addEventListener('click', () => {
  phoneInput.value = '';
});

isbnButton.addEventListener('click', () => {
  isbnInput.value = '';
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

document.querySelectorAll('.phone').forEach((td) => {
  let locale;
  if (td.textContent.startsWith('+35')) {
    locale = 'IE';
  } else if (td.textContent.startsWith('+49')) {
    locale = 'DE';
  } else if (td.textContent.startsWith('+34')) {
    locale = 'ES';
  }
  td.textContent = new Intl.InputMask('phone-number', {
    locale,
  }).format(td.textContent);
});

document.querySelectorAll('.isbn').forEach((td) => {
  td.textContent = new Intl.InputMask(
    'isbn-number',
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
