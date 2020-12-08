import {pipe} from 'ramda';

import parseInput, {DataSource} from './data/parseInput';
import parseProgram from './parseProgram';
import executeProgram from './executeProgram';

pipe(parseProgram, executeProgram)(parseInput(DataSource.Live));
