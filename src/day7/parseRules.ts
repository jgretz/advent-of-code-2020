import {trim} from 'ramda';
import {Rule, Slot} from './Types';

const toRemove = ['.', 'bags', 'bag'];
const clean = (str: string): string =>
  trim(toRemove.reduce((acc: string, curr: string) => acc.replace(curr, ''), str));

const parseSlot = (raw: string): Slot => {
  const [rawQuantity, ...rawDescription] = raw.split(' ');
  const quantity = parseInt(rawQuantity, 10);
  const description = clean(rawDescription.join(' '));

  return {
    quantity,
    description,
  };
};

const parseSlots = (raw: string[]) => {
  // handle no slots
  if (raw.length === 1 && raw[0].startsWith('no')) {
    return [];
  }

  return raw.map(parseSlot);
};

const parseRule = (raw: string): Rule => {
  const [rawDescription, rawSlots] = raw.split(' contain ');

  const description = clean(rawDescription);
  const slots = parseSlots(rawSlots.split(', '));

  return {description, slots};
};

export default (raw: string[]): Array<Rule> => raw.map(parseRule);
