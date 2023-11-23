import { MESSAGE } from "./constants/Messages";
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
    }
    if (strike === 0) {
      Console.print(`${ball}${MESSAGE.BALL}`);
    }
    if (ball === 0) {
      Console.print(`${strike}${MESSAGE.STRIKE}`);
    }
    Console.print(`${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`);
  },
};

export default Print;
