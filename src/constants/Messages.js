const MESSAGE = Object.freeze({
  GAME_START: `숫자 야구 게임을 시작합니다.`,
  GET_NUMBER: `숫자를 입력해주세요 : `,
  GAME_OVER: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_OR_EXIT: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
  NOTHING: `낫싱`,
  BALL: `볼`,
  STRIKE: `스트라이크`,
});

const ERROR_MESSAGE = Object.freeze({
  BLANK: `[ERROR] 입력값이 없습니다. 올바른 숫자를 입력해주세요.`,
  INVALID_NUMBER_TYPE: `[ERROR] 숫자만 입력 가능합니다. 3자리 숫자를 입력해주세요.`,
  INVALID_NUMBER_LENGTH: `[ERROR] 3자리 숫자를 입력해주세요.`,
  DUPLICATION_NUMBER: `[ERROR] 숫자가 중복되지 않게 입력해주세요.`,
  INVALID_RESTART_OR_EXIT: `[ERROR] 1 또는 2만 입력 가능합니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
});

export { MESSAGE, ERROR_MESSAGE };
