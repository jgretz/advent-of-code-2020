import {Password} from './Password';

export type PasswordValidator = (password: Password) => boolean;

export default (test: PasswordValidator) => (passwords: Array<Password>): Array<Password> =>
  passwords.filter(test);
