import {ValidationResult, ValidationResultCode} from './Types';

const test = (testIndex: number, preambleLength: number, set: Array<number>): boolean => {
  const startIndex = testIndex - preambleLength;
  const parts = set.slice(startIndex, testIndex);
  parts.sort((a, b) => a - b);

  const target = set[testIndex];

  for (let i = 0; i < parts.length - 1; i++) {
    for (let j = parts.length - 1; j > i; j--) {
      if (parts[i] + parts[j] === target) {
        return true;
      }

      // the numbers are only going to get smaller because we sorted, so we can eject if we are already smaller
      if (parts[i] + parts[j] < target) {
        break;
      }
    }
  }

  return false;
};

export default (preambleLength: number) => (set: Array<number>): ValidationResult => {
  for (let i = preambleLength; i < set.length; i++) {
    const isValid = test(i, preambleLength, set);
    if (!isValid) {
      return {
        set,
        result: ValidationResultCode.Invalid,

        invalidIndex: i,
        invalidValue: set[i],
      };
    }
  }

  return {
    set,
    result: ValidationResultCode.Valid,
  };
};
