/* eslint-disable operator-assignment */
import {AdapterAnalysis} from './Types';

export default (adapters: Array<number>): AdapterAnalysis => {
  const analysis = {
    distribution: {
      3: 1, // our device is always 3 higher
    },
  };

  // sort so they are in order
  adapters.sort((a, b) => a - b);

  for (let i = 0; i < adapters.length; i++) {
    const difference = adapters[i] - (adapters[i - 1] || 0); // look at the last device or the outlet which is 0 by rule

    analysis.distribution[difference] = (analysis.distribution[difference] ?? 0) + 1;
  }

  return analysis;
};
