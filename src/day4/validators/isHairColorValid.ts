import {Passport} from '../Types';

const regex = /#([0-9a-f]{6})/;

export default (passport: Passport): boolean => regex.test(passport.hcl);
