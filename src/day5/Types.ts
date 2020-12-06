export type BoardingPass = {
  raw: string;
  id: number;
  row: number;
  seat: number;
};

export const MIN_ROW = 0;
export const MAX_ROW = 127;
export const MIN_SEAT = 0;
export const MAX_SEAT = 7;
