import { AsYouType } from './phone-data.js';

const formatPhoneNumber = (value, options = {}) => {
  return new AsYouType(options?.locale).input(value).trim();
};

export default formatPhoneNumber;
