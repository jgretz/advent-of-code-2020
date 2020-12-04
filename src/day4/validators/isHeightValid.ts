import {Passport} from '../Types';

const UNIT_MAP = {
  cm: {min: 150, max: 193},
  in: {min: 59, max: 76},
};

const regex = /([0-9]+)([a-z]{2})/;

export default (passport: Passport): boolean => {
  const [, value, unit] = passport.hgt?.match(regex) || [];

  const range = UNIT_MAP[unit];
  if (!range) {
    return false;
  }

  const numberValue = parseInt(value, 10);
  return numberValue >= range.min && numberValue <= range.max;
};
