import {pipe} from 'ramda';

import parseInput from './data/parseInput';
import groupAnswersByEveryone from './groupAnswersByEveryone';
import sumAllYesAnswers from './sumYesAnswers';
import display from './display';

pipe(parseInput, groupAnswersByEveryone, sumAllYesAnswers, display)();
