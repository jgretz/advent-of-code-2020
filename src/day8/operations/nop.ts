import {Instruction, RuntimeContext} from '../Types';

export default (instruction: Instruction, context: RuntimeContext): void => {
  context.next++;
};
