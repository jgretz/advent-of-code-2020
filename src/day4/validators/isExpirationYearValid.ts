import {Passport} from '../Types';
import isValidYear from './isValidYear';

export default (passport: Passport): boolean => isValidYear(2020, 2030)(passport.eyr);
