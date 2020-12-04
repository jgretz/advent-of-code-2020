/* eslint-disable no-param-reassign */

import {Passport} from './Types';

const FIELD_VALUE_DELIMITER = ':';

const parsePassport = (fields: string[]): Passport => {
  return fields.reduce((passport, raw) => {
    const [field, value] = raw.split(FIELD_VALUE_DELIMITER);

    passport[field] = value;

    return passport;
  }, {});
};

export default (groupedFields: Array<string[]>): Array<Passport> =>
  groupedFields.map(parsePassport);
