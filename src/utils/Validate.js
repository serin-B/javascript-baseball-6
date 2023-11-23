import { ERROR_MESSAGE } from "../constants/Messages.js";
import GAME_VALUE from "../constants/GameValue.js";

export function isValidNumber(string) {
  try {
    isNotBlank(string);
    isOnlyNumber(string);
    isValidLength(string);
    isNotDuplication(string);

    return { isValid: true, message: "" };
  } catch (error) {
    return { isValid: false, message: error.message };
  }
}

export function isValidChoice(string) {
  try {
    isNotBlank(string);
    isOnlyRestartOrExitValue(string);

    return { isValid: true, message: "" };
  } catch (error) {
    return { isValid: false, message: error.message };
  }
}

function isNotBlank(string) {
  if (string.length === 0) {
    throw new Error(ERROR_MESSAGE.BLANK);
  }
}

function isValidLength(string) {
  if (string.length !== GAME_VALUE.NUMBER_LENGTH) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_LENGTH);
  }
}

function isOnlyNumber(string) {
  const number = Number(string);
  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_TYPE);
  }
}

function isNotDuplication(string) {
  const memo = {};
  for (let i = 0; i < string.length; i++) {
    if (memo[string[i]]) {
      throw new Error(ERROR_MESSAGE.DUPLICATION_NUMBER);
    }
    memo[string[i]] = true;
  }
}

function isOnlyRestartOrExitValue(string) {
  const number = Number(string);
  if (number !== GAME_VALUE.RESTART && number !== GAME_VALUE.EXIT) {
    throw new Error(ERROR_MESSAGE.INVALID_RESTART_OR_EXIT);
  }
}
