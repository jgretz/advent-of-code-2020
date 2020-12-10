import {ValidationResult, ValidationResultCode, CrackResult} from './Types';

const findSequence = (target: number, set: Array<number>): Array<number> | null => {
  for (let i = 0; i < set.length; i++) {
    const sequence = [set[i]];
    let sum = set[i];

    for (let j = i + 1; j < set.length; j++) {
      sequence.push(set[j]);
      sum += set[j];

      if (sum === target) {
        return sequence;
      }

      // at this point, this isnt the sequence
      if (sum > target) {
        break;
      }
    }
  }

  return null;
};

export default (validationResult: ValidationResult): CrackResult => {
  if (validationResult.result !== ValidationResultCode.Invalid) {
    return {
      found: false,
    };
  }

  const crackSequence = findSequence(validationResult.invalidValue, validationResult.set);
  if (!crackSequence) {
    return {
      found: false,
    };
  }

  return {
    found: true,
    crackSequence,
  };
};
