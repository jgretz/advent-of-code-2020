import {pipe} from 'ramda';

import parseInput, {DataSource} from './data/parseInput';
import parseRules from './parseRules';
import countBags from './countBags';

const TARGET = 'shiny gold';

const display = (bags: number): void => {
  console.log(`The ${TARGET} bag would require ${bags} total bags!!!`);
};

pipe(parseRules, countBags(TARGET), display)(parseInput(DataSource.Live));
