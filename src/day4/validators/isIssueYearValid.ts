import {Passport} from '../Types';
import isValidYear from './isValidYear';

export default (passport: Passport): boolean => isValidYear(2010, 2020)(passport.iyr);
