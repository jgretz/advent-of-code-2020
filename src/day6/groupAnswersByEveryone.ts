import {GroupAnswers} from './Types';

const splitIntoGroups = (raw: string[]): Array<Array<string[]>> => {
  const groups = new Array<Array<string[]>>();

  let answers = [];
  for (let i = 0; i < raw.length; i++) {
    const characters = raw[i].split('');
    if (characters.length === 0) {
      groups.push(answers);
      answers = [];
      continue;
    }

    answers.push(characters);
  }

  if (answers.length > 0) {
    groups.push(answers);
  }

  return groups;
};

const createGroupAnswers = (answers: Array<string[]>): GroupAnswers => {
  const all = answers[0].filter((v) => answers.slice(1).every((a) => a.includes(v)));

  return {
    answers: new Set(all),
  };
};

export default (raw: string[]): Array<GroupAnswers> => {
  const groupAnswers = splitIntoGroups(raw);

  return groupAnswers.map(createGroupAnswers);
};
