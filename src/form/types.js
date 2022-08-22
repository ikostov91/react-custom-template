export const FIELD_TYPES = {
  COLUMN: 'column',
  ROW: 'row',
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
  SINGLE_SELECT: 'singleSelect'
};

export const EMAIL_ADDRESS_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const REQUIRED_VALIDATION = 'required';
export const MAX_LENGTH_VALIDATION = 'maxLength';
export const PATTERN_VALIDATION = 'pattern';
export const CUSTOM_VALIDATION = 'validate';
export const MIN_VALIVATION = 'min';
export const MAX_VALIVATION = 'max';

export const VALIDATIONS = [
  REQUIRED_VALIDATION,
  MAX_LENGTH_VALIDATION,
  PATTERN_VALIDATION,
  CUSTOM_VALIDATION,
  MIN_VALIVATION,
  MIN_VALIVATION
];
