import {Passport} from '../Types';

const ALLOWED_EYE_COLORS = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

export default (passport: Passport): boolean => ALLOWED_EYE_COLORS.includes(passport.ecl);
