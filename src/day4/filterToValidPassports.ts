import {Passport} from './Types';

export type IsPassportValid = (passport: Passport) => boolean;

const passesAllTests = (tests: Array<IsPassportValid>) => (passport: Passport) =>
  tests.map((t) => t(passport)).reduce((acc, value) => acc && value, true);

export default (tests: Array<IsPassportValid>) => (passports: Array<Passport>): Array<Passport> =>
  passports.filter(passesAllTests(tests));
