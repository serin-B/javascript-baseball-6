import { Random } from "@woowacourse/mission-utils";
import GAME_VALUE from "../constants/GameValue.js";

export const generateNumber = () => {
  const answer = [];

  while (answer.length < GAME_VALUE.NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(
      GAME_VALUE.MIN_NUMBER,
      GAME_VALUE.MAX_NUMBER
    );
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }

  return answer;
};
