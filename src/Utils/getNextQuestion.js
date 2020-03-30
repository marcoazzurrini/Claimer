const setNextQuestion = (arr, questionId, input) => {
  let { 0: num } = questionId.split(".");

  const getNextQuestion = () => {
    num = String(parseInt(num) + 1);
    let question = arr.find(
      ({ id }) => id === `${num}${input ? "." + input : ""}` || id === num
    );
    if (!question && num < arr.length) {
      input = "";
      getNextQuestion(arr, num);
    } else {
      return question;
    }
  };

  return getNextQuestion();
};

export default setNextQuestion;
