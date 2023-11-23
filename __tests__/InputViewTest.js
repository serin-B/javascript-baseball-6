import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/constants/Messages.js";
import UserInput from "../src/InputView.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const runExceptionForGetNumber = async (input, errorMessage) => {
  mockQuestions([input]);

  await expect(UserInput.getNumber()).rejects.toThrow(errorMessage);
};

const runExceptionForGetRestartOrExit = async (input, errorMessage) => {
  mockQuestions([input]);

  await expect(UserInput.getRestartOrExit()).rejects.toThrow(errorMessage);
};

describe("사용자 숫자 입력 관련 예외 테스트", () => {
  test("아무것도 입력되지 않으면 에러", async () => {
    const input = "";
    const errorMessage = ERROR_MESSAGE.BLANK;

    await runExceptionForGetNumber(input, errorMessage);
  });

  test("숫자가 아닌 글자가 입력되면 에러", async () => {
    const input = "haha";
    const errorMessage = ERROR_MESSAGE.INVALID_NUMBER_TYPE;

    await runExceptionForGetNumber(input, errorMessage);
  });

  test.each([["12"], ["1234"]])(
    "숫자가 3개보다 적거나 많으면 에러",
    async (input) => {
      const errorMessage = ERROR_MESSAGE.INVALID_NUMBER_LENGTH;

      await runExceptionForGetNumber(input, errorMessage);
    }
  );

  test("숫자가 중복으로 입력되면 에러", async () => {
    const input = "122";
    const errorMessage = ERROR_MESSAGE.DUPLICATION_NUMBER;

    await runExceptionForGetNumber(input, errorMessage);
  });
});

describe("사용자 재시작 또는 종료 입력 관련 예외 테스트", () => {
  test("아무것도 입력되지 않으면 에러", async () => {
    const input = "";
    const errorMessage = ERROR_MESSAGE.BLANK;

    await runExceptionForGetRestartOrExit(input, errorMessage);
  });

  test.each([["restart"], ["12"]])(
    "1 또는 2가 아닌 글자가 입력되면 에러",
    async (input) => {
      const errorMessage = ERROR_MESSAGE.INVALID_RESTART_OR_EXIT;

      await runExceptionForGetRestartOrExit(input, errorMessage);
    }
  );
});

describe("사용자 숫자 입력 관련 정상 동작 테스트", () => {
  test("3자리 숫자를 입력하면 숫자를 인수로 갖는 배열 반환", async () => {
    const input = "123";
    const result = [1, 2, 3];

    mockQuestions([input]);

    await expect(UserInput.getNumber()).resolves.toEqual(result);
  });
});

describe("사용자 재시작 또는 종료 입력 관련 정상 동작 테스트", () => {
  test("1 입력하면 숫자 1 반환", async () => {
    const input = "1";
    const result = 1;

    mockQuestions([input]);

    await expect(UserInput.getRestartOrExit()).resolves.toBe(result);
  });
});
