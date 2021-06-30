import './intl-inputmask-polyfill.js'

document.querySelector('input').addEventListener('input', (e) => {
  e.target.value = new Intl.InputMask('credit-card-number').format(e.target.value); 
});

document.querySelectorAll('.credit-card-number').forEach(td => {
  td.textContent = new Intl.InputMask('credit-card-number').format(td.textContent); 
});
