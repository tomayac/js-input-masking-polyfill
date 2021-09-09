const formatInternationalBankAccountNumber = (value) => {
  // Convert the value to string.
  value = value.toString().trim();
  // Remove anything that isn't a number or a letter, if nothing left, return.
  value = value.replace(/[^\w]/g, '');
  if (!value) {
    return '';
  }
  // Groups of four.
  return value
    .match(/\w{1,4}/g)
    .join(' ')
    .toUpperCase()
    .trim();
};

export default formatInternationalBankAccountNumber;
