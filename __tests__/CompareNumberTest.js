import { compareNumber } from "../src/utils/CompareNumber.js";

describe("숫자 비교 테스트", () => {
  test("3자리 숫자가 자리까지 모두 일치할 경우, 3스트라이크", () => {
    const answer = [1, 2, 3];
    const challenge = [1, 2, 3];
    const result = { strike: 3, ball: 0 };

    expect(compareNumber({ answer, challenge })).toEqual(result);
  });
  test("1자리 숫자는 같은 자리, 2자리 숫자는 포함되어만 있을 경우, 2볼 1스트라이크", () => {
    const answer = [1, 2, 3];
    const challenge = [1, 3, 2];
    const result = { strike: 1, ball: 2 };

    expect(compareNumber({ answer, challenge })).toEqual(result);
  });
  test("1자리 숫자가 포함만 되어 있을경우, 1볼", () => {
    const answer = [1, 2, 3];
    const challenge = [5, 4, 2];
    const result = { strike: 0, ball: 1 };

    expect(compareNumber({ answer, challenge })).toEqual(result);
  });
  test("같은 숫자가 한 개도 없을 경우, 낫싱", () => {
    const answer = [1, 2, 3];
    const challenge = [7, 8, 9];
    const result = { strike: 0, ball: 0 };

    expect(compareNumber({ answer, challenge })).toEqual(result);
  });
});
