import {Passport} from './Types';

export default (passports: Array<Passport>): Array<Passport> => {
  console.log(`There are ${passports.length} valid passports.`);

  return passports;
};
