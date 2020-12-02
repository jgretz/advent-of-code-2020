import {pipe} from 'ramda';

import {Password} from './Password';

import parseInput from './parseInput';
import parsePasswords from './parsePasswords';
import filterPasswordsBy from './filterPasswordsBy';
import display from './display';

// test
const test = ({number1, number2, term, password}: Password) => {
  // need to adjust from 1 to 0 based index
  const char1 = password.charAt(number1 - 1);
  const char2 = password.charAt(number2 - 1);

  // implicitly false because a valid password cant have both positions
  if (char1 === char2) {
    return false;
  }

  // does either equal
  return char1 === term || char2 === term;
};

// run
pipe(parseInput, parsePasswords, filterPasswordsBy(test), display)();
