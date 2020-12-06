import createBoardingPass from './createBoardingPass';
import {BoardingPass, MIN_ROW, MAX_ROW, MIN_SEAT, MAX_SEAT} from './Types';

const FRONT = 'F';
const LEFT = 'L';

const parseByte = (min: number, max: number, start: number, end: number, sentinal: string) => (
  raw: string,
): number => {
  const range = {min, max};

  for (let i = start; i < end; i++) {
    const CELL = raw[i];
    const change = Math.ceil((range.max - range.min) / 2);

    if (CELL === sentinal) {
      range.max -= change;
    } else {
      range.min += change;
    }
  }

  return raw[end] === sentinal ? range.min : range.max;
};

const parseRow = parseByte(MIN_ROW, MAX_ROW, 0, 6, FRONT);
const parseSeat = parseByte(MIN_SEAT, MAX_SEAT, 7, 9, LEFT);

const hydratePass = (raw: string): BoardingPass => {
  const row = parseRow(raw);
  const seat = parseSeat(raw);

  return createBoardingPass(row, seat, raw);
};

export default (raw: string[]): Array<BoardingPass> => raw.map(hydratePass);
