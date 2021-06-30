import formatCreditCardNumber from "./credit-card.js";

(() => {
  const supported = "InputMask" in Intl;

  if (supported) {
    return;
  }

  function InputMaskConstructor(type, options) {
    this.type = type;
    this.options = options;
  }

  InputMaskConstructor.prototype.format = function(value) {
    if (!value) {
      return '';
    }

    if (this.type === "credit-card-number") {
      return formatCreditCardNumber(value);
    }
  };

  Object.defineProperty(Intl, "InputMask", {
    configurable: true,
    writable: true,
    value: InputMaskConstructor
  });

  Object.defineProperty(Intl.InputMask, "prototype", {
    writable: false
  });
})();
