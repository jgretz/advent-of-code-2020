import createBoardingPass from './createBoardingPass';
import {BoardingPass} from './Types';

export default (passes: Array<BoardingPass>): BoardingPass | null => {
  passes.sort((a, b) => a.id - b.id);

  for (let i = 1; i < passes.length - 1; i++) {
    const pass = passes[i];
    const nextPass = passes[i + 1];
    const missingID = pass.id + 1;

    if (nextPass.id !== missingID) {
      const missingRow = missingID % 8;
      const missingSeat = missingID - missingRow * 8;

      return createBoardingPass(missingRow, missingSeat);
    }
  }

  return null;
};
