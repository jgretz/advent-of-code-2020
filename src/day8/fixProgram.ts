import {Instruction, StatusCode} from './Types';
import executeProgram from './executeProgram';

const test = (program: Array<Instruction>): boolean => {
  const context = executeProgram(program);

  return context.status === StatusCode.Complete;
};

const swap = (program: Array<Instruction>, index: number): [boolean, Array<Instruction>] => {
  const instruction = program[index];
  if (instruction.operation === 'acc') {
    return [false, program];
  }

  const swapped = {
    operation: instruction.operation === 'nop' ? 'jmp' : 'nop',
    argument: instruction.argument,
  };

  const clone = Array.from(program);
  clone[index] = swapped;

  return [true, clone];
};

export default (program: Array<Instruction>): Array<Instruction> => {
  for (let i = 0; i < program.length; i++) {
    console.log(`Testing Instruction ${i}`);
    const [change, testProgram] = swap(program, i);
    if (!change) {
      continue;
    }

    const result = test(testProgram);
    if (result) {
      return testProgram;
    }
  }

  return program;
};
