import INPUT from './input';
import NEGATIVE_INPUT from './testData/negativeTest';
import POSITIVE_INPUT from './testData/postiveTest';

export enum DataSource {
  Live,
  NegativeTest,
  PositiveTest,
  CombinedTest,
}

const dataMap = {
  [DataSource.Live]: INPUT,
  [DataSource.NegativeTest]: NEGATIVE_INPUT,
  [DataSource.PositiveTest]: POSITIVE_INPUT,
  [DataSource.CombinedTest]: `${NEGATIVE_INPUT}\n${POSITIVE_INPUT}`,
};

export default (source = DataSource.Live): string[] => dataMap[source].split('\n');
