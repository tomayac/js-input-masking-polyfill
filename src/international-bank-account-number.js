const formatInternationalBankAccountNumber = (value) => {
  // Convert the value to string.
  value = value.toString().trim();
  // Remove anything that isn't a number or a letter, if nothing left, return.
  value = value.replace(/[^\w]/g, '');
  if (!value) {
    return '';
  }
  // All other cards (4-4-4).
  return value
    .match(/\w{1,4}/g)
    .join(' ')
    .trim();
};

export default formatInternationalBankAccountNumber;
