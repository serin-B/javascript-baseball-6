import UserInput from "./InputView.js";
import Print from "./OutputView.js";
import { generateNumber } from "./utils/GenerateNumber.js";
import { compareNumber } from "./utils/CompareNumber.js";
import GAME_VALUE from "./constants/GameValue.js";

class BaseballGame {
  #answerNumber;

  async start() {
    try {
      Print.gameStart();
      await this.#play();
    } catch (error) {
      throw error;
    }
  }

  async #play() {
    try {
      this.#setAnswerNumber();
      await this.#repeatAskUntilGetAnswer();
      Print.gameOver();
      await this.#chooseRestartOrExit();
    } catch (error) {
      throw error;
    }
  }

  #setAnswerNumber() {
    this.#answerNumber = generateNumber();
  }

  async #repeatAskUntilGetAnswer() {
    try {
      let flag = true;

      while (flag) {
        const challengeNumber = await UserInput.getNumber();
        const result = this.#getCompareResult(challengeNumber);

        Print.gameResult(result);

        flag = result.strike !== GAME_VALUE.NUMBER_LENGTH;
      }
    } catch (error) {
      throw error;
    }
  }

  #getCompareResult(challengeNumber) {
    return compareNumber({
      answer: this.#answerNumber,
      challenge: challengeNumber,
    });
  }

  async #chooseRestartOrExit() {
    try {
      const choice = await UserInput.getRestartOrExit();
      if (choice === GAME_VALUE.EXIT) {
        return;
      }

      await this.#play();
    } catch (error) {
      throw error;
    }
  }
}

export default BaseballGame;
