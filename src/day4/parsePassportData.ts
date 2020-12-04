const PASSPORT_DELIMITER = '';
const FIELD_DELIMITER = ' ';

export default (raw: string[]): Array<string[]> => {
  const passports = new Array<string[]>();

  let target = [];
  for (let i = 0; i < raw.length; i++) {
    const line = raw[i];

    if (line === PASSPORT_DELIMITER) {
      passports.push(target);
      target = [];
      continue;
    }

    target.push(...line.split(FIELD_DELIMITER));
  }
  passports.push(target);

  return passports;
};
