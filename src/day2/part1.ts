import INPUT from './input';

// test
const passwordPattern = /([0-9]+)-([0-9]+) ([a-z]+): ([a-z]+)/;

const isLineValid = (line: string): boolean => {
  const [, minChar, maxChar, character, pswd] = line.match(passwordPattern);

  const occurencesPattern = new RegExp(character, 'g');
  const occurences = (pswd.match(occurencesPattern) || []).length;

  const min = parseInt(minChar, 10);
  const max = parseInt(maxChar, 10);

  return occurences >= min && occurences <= max;
};

// run
const lines = INPUT.split('\n');
const validLines = lines.filter(isLineValid);

console.log(`${validLines.length} passwords are valid out of ${lines.length}.`);
