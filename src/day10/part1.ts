import {pipe} from 'ramda';

import parseInput, {DataSource} from './data/parseInput';
import orderAdapters from './orderAdapters';
import {AdapterAnalysis} from './Types';

const display = (analysis: AdapterAnalysis): void => {
  console.log(analysis.distribution);
};

pipe(orderAdapters, display)(parseInput(DataSource.Live));
