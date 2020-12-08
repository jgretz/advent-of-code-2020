import INPUT from './input';
import TEST_DATA_1 from './testData1';

export enum DataSource {
  Live,
  Test1,
}

const dataMap = {
  [DataSource.Live]: INPUT,
  [DataSource.Test1]: TEST_DATA_1,
};

export default (source = DataSource.Live): string[] => dataMap[source];
