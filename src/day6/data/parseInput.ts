import INPUT from './input';
import TEST_DATA from './testData';

export enum DataSource {
  Live,
  Test,
}

export default (source = DataSource.Live): string[] =>
  source === DataSource.Live ? INPUT : TEST_DATA;
