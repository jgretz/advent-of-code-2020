import {pipe} from 'ramda';

import {Password} from './Password';

import parseInput from './parseInput';
import parsePasswords from './parsePasswords';
import filterToValidPasswords from './filterPasswordsBy';
import display from './display';

// test
const test = ({number1, number2, term, password}: Password) => {
  const occurencesPattern = new RegExp(term, 'g');
  const occurences = (password.match(occurencesPattern) || []).length;

  return occurences >= number1 && occurences <= number2;
};

// run
pipe(parseInput, parsePasswords, filterToValidPasswords(test), display)();
