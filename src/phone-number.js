import { AsYouType } from 'https://unpkg.com/libphonenumber-js@1.9.26/index.es6.js?module';

const formatPhoneNumber = (value, options = {}) => {
  return new AsYouType(options?.locale).input(value).trim();
};

export default formatPhoneNumber;
