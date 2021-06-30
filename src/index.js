import formatCreditCardNumber from './credit-card-number.js';
import formatInternationalBankAccountNumber from './international-bank-account-number.js';

(() => {
  const supported = 'InputMask' in Intl;

  if (supported) {
    return;
  }

  function InputMaskConstructor(type, options) {
    this.type = type;
    this.options = options;
  }

  InputMaskConstructor.prototype.format = function (value) {
    if (!value) {
      return '';
    }

    if (this.type === 'credit-card-number') {
      return formatCreditCardNumber(value);
    }
    if (this.type === 'international-bank-account-number') {
      return formatInternationalBankAccountNumber(value);
    }
  };

  Object.defineProperty(Intl, 'InputMask', {
    configurable: true,
    writable: true,
    value: InputMaskConstructor,
  });

  Object.defineProperty(Intl.InputMask, 'prototype', {
    writable: false,
  });
})();
