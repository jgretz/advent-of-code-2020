import {pipe} from 'ramda';

import parseInput from './parseInput';
import parsePassportData from './parsePassportData';
import hydratePassports from './hydratePassports';
import filterToValidPassports from './filterToValidPassports';
import display from './display';

import hasRequiredFields from './validators/hasRequiredFields';
import isIssueYearValid from './validators/isIssueYearValid';
import isBirthYearValid from './validators/isBirthYearValid';
import isExpirationYearValid from './validators/isExpirationYearValid';
import isEyeColorValid from './validators/isEyeColorValid';
import isHairColorValid from './validators/isHairColorValid';
import isHeightValid from './validators/isHeightValid';
import isPassportIdValid from './validators/isPassportIdValid';

const tests = [
  hasRequiredFields,
  isBirthYearValid,
  isIssueYearValid,
  isExpirationYearValid,
  isHeightValid,
  isHairColorValid,
  isEyeColorValid,
  isPassportIdValid,
];

pipe(parseInput, parsePassportData, hydratePassports, filterToValidPassports(tests), display)();
