/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import INPUT from './input';

// find logic
const findTarget = (target: number): [number, number] | null => {
  INPUT.sort((x, y) => x - y);

  for (let i = 0; i < INPUT.length; i++) {
    for (let j = INPUT.length; j >= 1; j--) {
      const a = INPUT[i];
      const b = INPUT[j];

      if (a + b === target) {
        return [a, b];
      }

      if (a + b < target) {
        break;
      }
    }
  }

  return null;
};

// execute
const TARGET = 2020;
const entries = findTarget(TARGET);

// display
if (entries) {
  console.log(
    `${entries[0]} and ${entries[1]} found that add up to ${TARGET}. Multiplied they are ${
      entries[0] * entries[1]
    }`,
  );
} else {
  console.log('No entries found');
}
