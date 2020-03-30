/** @jsx jsx */

import { Global, jsx } from "@emotion/core";
import { base } from "../Styles/base";
import { Layout } from "../Styles/Layout";
import { logoStyles } from "../Styles/images";

import { useState } from "react";

import quizQuestions from "../Api/questions";

import Result from "./Result";
import Form from "./Form";
import Input from "./Input";
import InputRadio from "./InputRadio";

import LogoImage from "../Assets/logo.png";

import getNextQuestion from "../Utils/getNextQuestion";
import getPrevQuizInstance from "../Utils/getPrevQuizInstance";

import ErrorBoundary from "./ErrorBoundary";

function App() {
  // STATE
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0]);
  const [isQuizFinish, setIsQuizFinish] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState([]);

  // HANLE FORM SUBMITS, UPDATE STATES AND TRIGGET useNextQuestion
  const handleSubmit = inputVal => {
    const nextQuestion = getNextQuestion(
      quizQuestions,
      currentQuestion.id,
      inputVal
    );
    setAnswers([
      ...answers,
      { value: inputVal, id: currentQuestion.id, tag: currentQuestion.tag }
    ]);
    if (!nextQuestion) setIsQuizFinish(true);
    else setCurrentQuestion(nextQuestion);
    setCompletedQuestions([...completedQuestions, currentQuestion]);
  };

  // GET PREVIOUS QUESTION
  const getPreviousQuestion = () => {
    if (completedQuestions.length > 0) {
      const prevQuizInstance = getPrevQuizInstance(completedQuestions, answers);
      setAnswers(prevQuizInstance.answers);
      setCurrentQuestion(prevQuizInstance.lastQuestion);
    }
  };

  return (
    <div css={Layout}>
      <Global styles={base} />
      <img css={logoStyles} src={LogoImage} alt="logo" />
      <ErrorBoundary>
        {!isQuizFinish ? (
          <Form
            question={currentQuestion}
            getPreviousQuestion={getPreviousQuestion}
            handleSubmit={inputVal => handleSubmit(inputVal)}
            render={props => {
              if (currentQuestion.answers.length > 0)
                return <InputRadio props={props} />;
              else return <Input props={props} />;
            }}
          />
        ) : (
          <Result answers={answers} />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
