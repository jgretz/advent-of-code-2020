/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import INPUT from './input';

// find logic
const findTarget = (target: number): [number, number, number] | null => {
  INPUT.sort((x, y) => x - y);

  for (let i = 0; i < INPUT.length; i++) {
    for (let j = INPUT.length; j >= 1; j--) {
      for (let k = 0; k < INPUT.length; k++) {
        const a = INPUT[i];
        const b = INPUT[j];
        const c = INPUT[k];

        if (a + b + c === target) {
          return [a, b, c];
        }
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
    `${entries.join(', ')} found that add up to ${TARGET}. Multiplied they are ${
      entries[0] * entries[1] * entries[2]
    }`,
  );
} else {
  console.log('No entries found');
}
