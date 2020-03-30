/** @jsx jsx */
import { jsx } from "@emotion/core";

import { BtnMedium } from "../Styles/buttons";
import { formStyles, formControls } from "../Styles/form";
import { chevronStyles } from "../Styles/images";

import ChevronImage from "../Assets/chevron.png";

import Message from "./Message";

import useFormValidation from "../Hooks/useFormValidation";

import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({
  question,
  handleSubmit,
  render,
  getPreviousQuestion
}) {
  // USE STATE
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState(false);

  // USE FORM VALIDATION
  const isValidated = useFormValidation(inputVal, question.type);

  // HANDLE INPUT CHANGE
  const handleChange = inputValue => setInputVal(inputValue);

  // HANDLE FORM SUBMITS, CALL HANDLESUBMIT PROP
  const handleFormSubmit = e => {
    e.preventDefault();

    if (isValidated && inputVal !== "") {
      handleSubmit(inputVal);
      setInputVal("");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  // CALL GetNextQuestion PROP
  const handleGoBack = () => {
    setInputVal("");
    getPreviousQuestion();
  };

  return (
    <form css={formStyles} onSubmit={e => handleFormSubmit(e)}>
      {render({ question, handleChange, inputVal })}
      {error ? <Message>Please enter a valid input</Message> : null}
      <div css={formControls}>
        <img
          src={ChevronImage}
          onClick={handleGoBack}
          css={chevronStyles}
          alt="go back"
        />
        <button css={BtnMedium} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  render: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};
