import {Instruction} from './Types';

const parseInstruction = (raw: string): Instruction => {
  const [operation, rawArgument] = raw.split(' ');

  return {
    operation,
    argument: parseInt(rawArgument, 10),
  };
};

export default (raw: string[]): Array<Instruction> => raw.map(parseInstruction);
