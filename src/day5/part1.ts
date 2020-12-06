import {pipe} from 'ramda';

import {BoardingPass} from './Types';

import parseInput from './data/parseInput';
import hydratePasses from './hydratePasses';
import findMaximumPass from './findMaximumPass';

const display = (pass: BoardingPass): void => {
  console.log('Boarding pass with the maximum id is: ', pass);
};

pipe(parseInput, hydratePasses, findMaximumPass, display)();
