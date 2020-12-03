import {pipe} from 'ramda';

import parseInput from './parseInput';
import hydrateMatrix from './hydrateMatrix';
import display from './display';
import countTreesForSteps from './countTreesForSteps';

const steps = [{x: 3, y: 1}];

pipe(parseInput, hydrateMatrix, countTreesForSteps(steps), display)();
