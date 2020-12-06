/* eslint-disable no-loop-func */
import {GroupAnswers} from './Types';

export default (raw: string[]): Array<GroupAnswers> => {
  const answers = [];

  let groupAnswers = {
    answers: new Set<string>(),
  };

  for (let i = 0; i < raw.length; i++) {
    const characters = raw[i].split('');
    if (characters.length === 0) {
      answers.push(groupAnswers);

      groupAnswers = {
        answers: new Set<string>(),
      };

      continue;
    }

    characters.forEach((c: string): void => {
      groupAnswers.answers.add(c);
    });
  }
  answers.push(groupAnswers);

  return answers;
};
