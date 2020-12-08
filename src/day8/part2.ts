import {pipe} from 'ramda';

import parseInput, {DataSource} from './data/parseInput';
import parseProgram from './parseProgram';
import fixProgram from './fixProgram';
import executeProgram from './executeProgram';

pipe(parseProgram, fixProgram, executeProgram)(parseInput(DataSource.Live));
