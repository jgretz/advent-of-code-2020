/* eslint-disable @typescript-eslint/no-empty-function */
import {Instruction, RuntimeContext} from '../Types';

export default (instruction: Instruction, context: RuntimeContext): void => {
  context.accumulator += instruction.argument;
  context.next++;
};
