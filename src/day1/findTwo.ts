import INPUT from './input';

INPUT.sort((x, y) => x - y);

// find logic
const findSplit = (target: number): number => {
  return INPUT.findIndex((x) => x > target / 2);
};

export default (target: number): [number, number] | null => {
  const split = findSplit(target);

  for (let i = 0; i <= split; i++) {
    for (let j = INPUT.length; j >= split; j--) {
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
