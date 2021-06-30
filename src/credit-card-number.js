const formatCreditCardNumber = (value) => {
  // Convert the value to string.
  value = value.toString().trim();
  // Remove anything that isn't a number, if nothing left, return.
  value = value.replace(/[^0-9]/g, '');
  if (!value) {
    return '';
  }
  // American Express (34/37, 4-6-5).
  if (value.startsWith('34') || value.startsWith('37')) {
    return `${value.substr(0, 4)} ${value.substr(4, 6)} ${value.substr(
      10,
      5,
    )}`.trim();
  }
  // Diners Club (300-305/309, 4-6-6)
  if (
    value.startsWith('36') ||
    value.startsWith('38') ||
    value.startsWith('300') ||
    value.startsWith('301') ||
    value.startsWith('302') ||
    value.startsWith('303') ||
    value.startsWith('304') ||
    value.startsWith('305') ||
    value.startsWith('309')
  ) {
    return `${value.substr(0, 4)} ${value.substr(4, 6)} ${value.substr(
      10,
      4,
    )}`.trim();
  }
  // All other cards (4-4-4).
  return value
    .match(/\d{1,4}/g)
    .join(' ')
    .trim();
};

export default formatCreditCardNumber;
