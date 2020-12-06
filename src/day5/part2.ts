import {pipe} from 'ramda';

import {BoardingPass} from './Types';

import parseInput from './data/parseInput';
import hydratePasses from './hydratePasses';
import findMissingPass from './findMissingPass';

const display = (pass?: BoardingPass): void => {
  if (pass) {
    console.log('Your boarding pass is: ', pass);
  } else {
    console.log('No missing boarding pass found. Are you sure you are on the right plane?');
  }
};

pipe(parseInput, hydratePasses, findMissingPass, display)();
