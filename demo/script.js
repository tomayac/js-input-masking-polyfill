import '../src/index.js';

const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', (e) => {
  e.target.value = new Intl.InputMask('credit-card-number').format(
    e.target.value,
  );
});

button.addEventListener('click', () => {
  input.value = '';
});

document.querySelectorAll('.credit-card-number').forEach((td) => {
  td.textContent = new Intl.InputMask('credit-card-number').format(
    td.textContent,
  );
});
