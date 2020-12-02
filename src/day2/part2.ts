import INPUT from './input';

// test
const passwordPattern = /([0-9]+)-([0-9]+) ([a-z]+): ([a-z]+)/;

const isLineValid = (line: string): boolean => {
  const [, index1Char, index2Char, reqChar, pswd] = line.match(passwordPattern);

  // adjust to 0 base indexing
  const index1 = parseInt(index1Char, 10) - 1;
  const index2 = parseInt(index2Char, 10) - 1;

  const char1 = pswd.charAt(index1);
  const char2 = pswd.charAt(index2);

  // implicitly false because a valid password cant have both positions
  if (char1 === char2) {
    return false;
  }

  // does either equal
  return char1 === reqChar || char2 === reqChar;
};

// run
const lines = INPUT.split('\n');
const validLines = lines.filter(isLineValid);

console.log(`${validLines.length} passwords are valid out of ${lines.length}.`);
