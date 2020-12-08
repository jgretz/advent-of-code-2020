export type Slot = {
  description: string;
  quantity: number;
};

export type Rule = {
  description: string;
  slots: Array<Slot>;
};
