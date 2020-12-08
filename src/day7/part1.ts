import {pipe} from 'ramda';

import parseInput, {DataSource} from './data/parseInput';
import parseRules from './parseRules';
import findContainers from './findContainers';

const display = (containers: string[]): void => {
  console.log(
    `There are ${containers.length} containers that can hold your bag.\nThey are ${containers.join(
      '\n',
    )}.`,
  );
};

const TARGET = 'shiny gold';

pipe(parseRules, findContainers(TARGET), display)(parseInput(DataSource.Live));
