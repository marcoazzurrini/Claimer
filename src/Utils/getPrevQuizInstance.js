const getPrevQuizInstance = (questionsArr, answersArr) => {
  const lastQuestion = questionsArr.pop();
  const answers = [
    ...answersArr.slice(answersArr.length - 2, answersArr.length - 1)
  ];

  return { lastQuestion, answers };
};

export default getPrevQuizInstance;
