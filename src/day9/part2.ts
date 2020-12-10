import {pipe} from 'ramda';

import {CrackResult} from './Types';

import parseInput, {DataSource} from './data/parseInput';
import validateSet from './validateSet';
import findCrackSequence from './findCrackSequence';

const display = (result: CrackResult): void => {
  if (result.found) {
    result.crackSequence.sort((a, b) => a - b);

    const min = result.crackSequence[0];
    const max = result.crackSequence[result.crackSequence.length - 1];
    const sum = min + max;

    console.log(
      `The crack sequence is ${result.crackSequence}
      \nMin: ${min} | Max: ${max} | Sum: ${sum}`,
    );
  } else {
    console.log('No crack sequence found');
  }
};

const PREAMBLE_LENGTH = 25;

pipe(validateSet(PREAMBLE_LENGTH), findCrackSequence, display)(parseInput(DataSource.Live));
