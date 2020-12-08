export type Instruction = {
  operation: string;
  argument: number;
};

export enum StatusCode {
  Running,
  Complete,
  SyntaxError,
  InfiiteLoop,
}

export type RuntimeContext = {
  next: number;
  history: Array<number>;

  program: Array<Instruction>;

  accumulator: number;
  status: StatusCode;
};

export type Operation = (instruction: Instruction, context: RuntimeContext) => void;
