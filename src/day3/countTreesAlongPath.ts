import {Cell, Step} from './Types';

export default ({x, y}: Step, matrix: Array<Array<Cell>>): number => {
  const location = {x: 0, y: 0};
  let treeCount = 0;

  while (location.y < matrix.length) {
    const row = matrix[location.y];
    const checkX = location.x % row.length;

    if (row[checkX] === Cell.Tree) {
      treeCount++;
    }

    location.x += x;
    location.y += y;
  }

  return treeCount;
};
