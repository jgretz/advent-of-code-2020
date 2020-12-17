import INPUT from './input';
import TEST_DATA_1 from './testData1';
import TEST_DATA_2 from './testData2';

export enum DataSource {
  Live,
  Test1,
  Test2,
}

const dataMap = {
  [DataSource.Live]: INPUT,
  [DataSource.Test1]: TEST_DATA_1,
  [DataSource.Test2]: TEST_DATA_2,
};

export default (source = DataSource.Live): number[] => dataMap[source];
