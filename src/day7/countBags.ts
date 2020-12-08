import {sum} from 'ramda';
import {Rule, Slot} from './Types';

let countBags = null;
countBags = (target: string, rules: Array<Rule>): number => {
  const targetRule = rules.find((rule: Rule) => rule.description === target);

  const nestedBags = targetRule.slots.map(
    (slot: Slot): number => slot.quantity * countBags(slot.description, rules),
  );

  return 1 + sum(nestedBags);
};

export default (target: string) => (rules: Array<Rule>): number => {
  return countBags(target, rules) - 1;
};
