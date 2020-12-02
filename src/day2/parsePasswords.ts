import {Password} from './Password';

const passwordPattern = /([0-9]+)-([0-9]+) ([a-z]+): ([a-z]+)/;
const mapString = (str: string): Password => {
  const [, number1, number2, term, password] = str.match(passwordPattern);

  return {number1: parseInt(number1, 10), number2: parseInt(number2, 10), term, password};
};

export default (rawStrings: string[]): Array<Password> => rawStrings.map(mapString);
