import {BoardingPass} from './Types';

const calculateId = (row: number, seat: number) => row * 8 + seat;

export default (row: number, seat: number, raw?: string): BoardingPass => ({
  id: calculateId(row, seat),
  row,
  seat,
  raw,
});
