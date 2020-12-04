import {Passport} from '../Types';

const regex = /^[0-9]{9}$/;

export default (passport: Passport): boolean => regex.test(passport.pid);
