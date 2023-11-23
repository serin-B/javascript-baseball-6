import { MESSAGE } from "./constants/Messages.js";
import { Console } from "@woowacourse/mission-utils";
import { isValidNumber, isValidChoice } from "./utils/Validate.js";

const UserInput = {
  async getNumber() {
    try {
      const userNumber = await Console.readLineAsync(MESSAGE.GET_NUMBER);
      const { isValid, message } = isValidNumber(userNumber);

      if (!isValid) {
        throw new Error(message);
      }

      return userNumber.split("").map((el) => Number(el));
    } catch (error) {
      throw error;
    }
  },

  async getRestartOrExit() {
    try {
      const choice = await Console.readLineAsync(MESSAGE.RESTART_OR_EXIT);
      const { isValid, message } = isValidChoice(choice);

      if (!isValid) {
        throw new Error(message);
      }

      return Number(choice);
    } catch (error) {
      throw error;
    }
  },
};

export default UserInput;
