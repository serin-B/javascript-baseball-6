export const compareNumber = ({ answer, challenge }) => {
  const result = { strike: 0, ball: 0 };

  for (let i = 0; i < challenge.length; i++) {
    if (challenge[i] === answer[i]) {
      result.strike++;
    } else if (answer.includes(challenge[i])) {
      result.ball++;
    }
  }

  return result;
};
