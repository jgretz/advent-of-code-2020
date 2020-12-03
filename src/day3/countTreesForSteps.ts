import countTreesAlongPath from './countTreesAlongPath';
import {Cell, Step} from './Types';

const countTreesForStep = (matrix: Array<Array<Cell>>) => (step: Step) =>
  countTreesAlongPath(step, matrix);

export default (steps: Step[]) => (matrix: Array<Array<Cell>>): number[] =>
  steps.map(countTreesForStep(matrix));
