import {last} from 'ramda';
import {BoardingPass} from './Types';

export default (passes: Array<BoardingPass>): BoardingPass => {
  passes.sort((a, b) => a.id - b.id);

  return last(passes);
};
