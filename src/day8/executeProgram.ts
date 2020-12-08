import {Instruction, Operation, RuntimeContext, StatusCode} from './Types';
import {acc, jmp, nop} from './operations';

const operationMap: {[key: string]: Operation} = {acc, jmp, nop};

const isInfiniteLoop = (context: RuntimeContext): boolean => context.history.includes(context.next);

let executeNextStep = null;
executeNextStep = (context: RuntimeContext): void => {
  // get instruction
  const instruction = context.program[context.next];
  if (!instruction) {
    console.log('Program Terminated.');
    context.status = StatusCode.Complete;
    return;
  }

  // get operation logic
  const operation = operationMap[instruction.operation];
  if (!operation) {
    console.log(`Operation ${instruction.operation} invalid.`);
    context.status = StatusCode.SyntaxError;
    return;
  }

  // record
  context.history.push(context.next);

  // execute
  operation(instruction, context);
  console.log(
    `${instruction.operation} ${instruction.argument}`.padEnd(8),
    `| ${context.accumulator}`,
  );

  // detect if we should exit
  if (isInfiniteLoop(context)) {
    console.log('Infinite loop detected.');
    context.status = StatusCode.InfiiteLoop;
    return;
  }

  // recurse
  executeNextStep(context);
};

export default (program: Array<Instruction>): RuntimeContext => {
  const runtimeContext = {
    next: 0,
    history: [],

    program,

    accumulator: 0,
    status: StatusCode.Running,
  };

  executeNextStep(runtimeContext);

  return runtimeContext;
};
