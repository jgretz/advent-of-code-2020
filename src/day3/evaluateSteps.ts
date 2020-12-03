import {pipe} from 'ramda';

import {Step} from './Types';

import parseInput from './parseInput';
import hydrateMatrix from './hydrateMatrix';
import display from './display';
import countTreesForSteps from './countTreesForSteps';

export default (steps: Step[]): void => {
  pipe(parseInput, hydrateMatrix, countTreesForSteps(steps), display)();
};
