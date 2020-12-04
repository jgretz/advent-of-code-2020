import {pipe} from 'ramda';

import parseInput from './parseInput';
import parsePassportData from './parsePassportData';
import hydratePassports from './hydratePassports';
import filterToValidPassports from './filterToValidPassports';
import display from './display';

import hasRequiredFields from './validators/hasRequiredFields';

const tests = [hasRequiredFields];

pipe(parseInput, parsePassportData, hydratePassports, filterToValidPassports(tests), display)();
