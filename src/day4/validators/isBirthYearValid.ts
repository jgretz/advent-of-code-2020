import {Passport} from '../Types';
import isValidYear from './isValidYear';

export default (passport: Passport): boolean => isValidYear(1920, 2002)(passport.byr);
