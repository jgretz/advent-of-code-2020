import {Rule, Slot} from './Types';

const hasSlotFor = (targetDescription: string) => (rule: Rule): boolean =>
  rule.slots.find((slot: Slot) => slot.description === targetDescription) != null;

const findDirectContainers = (targetDescription: string, rules: Array<Rule>): Array<string> =>
  rules.filter(hasSlotFor(targetDescription)).map((rule: Rule) => rule.description);

// need the weird js redirect
let findUniqueContainerPaths = null;
findUniqueContainerPaths = (
  found: Set<string>,
  rules: Array<Rule>,
  targetDescription: string,
): void => {
  const directContainers = findDirectContainers(targetDescription, rules);
  const uniqContainers = directContainers.filter((container: string) => !found.has(container));

  // add to the set
  uniqContainers.forEach((container: string) => found.add(container));

  // recurse down
  uniqContainers.forEach((container: string) => findUniqueContainerPaths(found, rules, container));
};

export default (targetDescription: string) => (rules: Array<Rule>): Array<string> => {
  const paths = new Set<string>();
  findUniqueContainerPaths(paths, rules, targetDescription);

  return Array.from(paths);
};
