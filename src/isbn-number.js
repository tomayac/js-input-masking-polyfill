import isbn from './isbn-data.js';

const formatISBNNumber = (value) => {
  const result = isbn.hyphenate(value);
  return result ? result.trim() : value.trim();
};

export default formatISBNNumber;
