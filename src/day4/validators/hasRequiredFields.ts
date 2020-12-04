import {Passport} from '../Types';

export const REQUIRED_PASSPORT_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const hasValue = (passport: Passport) => (field: keyof Passport): boolean => !!passport[field];

export default (passport: Passport): boolean =>
  REQUIRED_PASSPORT_FIELDS.map(hasValue(passport)).reduce((acc, value) => acc && value, true);
