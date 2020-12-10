export enum ValidationResultCode {
  Valid,
  Invalid,
}

export type ValidationResult = {
  set: Array<number>;
  result: ValidationResultCode;

  invalidIndex?: number;
  invalidValue?: number;
};

export type CrackResult = {
  found: boolean;
  crackSequence?: Array<number>;
};
