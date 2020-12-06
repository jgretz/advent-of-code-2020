import {sum} from 'ramda';
import {GroupAnswers} from './Types';

export default (groups: Array<GroupAnswers>): number => sum(groups.map((g) => g.answers.size));
