import {Cell} from './Types';

type CELL = '#' | '.';

const cellStringMap: {[key: string]: Cell} = {
  '#': Cell.Tree,
  '.': Cell.Open,
};

const cellStringToCellEnum = (cell: CELL): Cell => cellStringMap[cell];
const hydrateRow = (row: string): Array<Cell> => Array.from(row).map(cellStringToCellEnum);

export default (courseMap: string[]): Array<Array<Cell>> => courseMap.map(hydrateRow);
