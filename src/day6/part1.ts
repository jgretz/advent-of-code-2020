import {pipe} from 'ramda';

import parseInput from './data/parseInput';
import groupAnswersByAnyone from './groupAnswersByAnyone';
import sumAllYesAnswers from './sumYesAnswers';
import display from './display';

pipe(parseInput, groupAnswersByAnyone, sumAllYesAnswers, display)();
