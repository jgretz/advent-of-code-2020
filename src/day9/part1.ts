import {pipe} from 'ramda';

import {ValidationResult, ValidationResultCode} from './Types';

import parseInput, {DataSource} from './data/parseInput';
import validateSet from './validateSet';

const display = (result: ValidationResult): void => {
  if (result.result === ValidationResultCode.Valid) {
    console.log('The set is valid.');
  } else {
    console.log(
      `The set is invalid. It fails at index ${result.invalidIndex} which is value ${result.invalidValue}`,
    );
  }
};

const PREAMBLE_LENGTH = 25;

pipe(validateSet(PREAMBLE_LENGTH), display)(parseInput(DataSource.Live));
