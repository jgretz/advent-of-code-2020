import {pipe} from 'ramda';

import parseInput from './parseInput';
import hydrateMatrix from './hydrateMatrix';
import countTreesForSteps from './countTreesForSteps';
import display from './display';

const steps = [
  {x: 1, y: 1},
  {x: 3, y: 1},
  {x: 5, y: 1},
  {x: 7, y: 1},
  {x: 1, y: 2},
];

pipe(parseInput, hydrateMatrix, countTreesForSteps(steps), display)();
