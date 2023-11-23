import { MESSAGE } from "./constants/Messages.js";
import { Console } from "@woowacourse/mission-utils";

const Print = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  gameOver() {
    Console.print(MESSAGE.GAME_OVER);
  },

  gameResult({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      Console.print(MESSAGE.NOTHING);
    } else if (strike === 0) {
      Console.print(`${ball}${MESSAGE.BALL}`);
    } else if (ball === 0) {
      Console.print(`${strike}${MESSAGE.STRIKE}`);
    } else {
      Console.print(`${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`);
    }
  },
};

export default Print;
