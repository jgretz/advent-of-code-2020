import INPUT from './input';
import findTwo from './findTwo';

// prep
INPUT.sort((x, y) => x - y);

// logic
export default (target: number): [number, number, number] | null => {
  for (let i = 0; i < INPUT.length; i++) {
    const number = INPUT[i];
    const remainderTarget = target - number;
    const others = findTwo(remainderTarget);

    if (others && !others.includes(number)) {
      return [number, ...others];
    }
  }

  return null;
};
