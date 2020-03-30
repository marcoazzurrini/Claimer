/** @jsx jsx */
import { jsx } from "@emotion/core";
import { headingSecondary, headingPrimary } from "../Styles/text";
import { InputRadioList } from "../Styles/inputs";
import PropTypes from "prop-types";

export default function InputRadio({ props }) {
  const { question, handleChange } = props;
  return (
    <ul css={InputRadioList}>
      <p css={headingPrimary}>{question.question}</p>
      {question.answers.map(answer => (
        <li key={answer}>
          <input
            type={question.type}
            value={answer}
            onChange={() => handleChange(answer)}
            id={answer}
            name="option"
          />
          <label htmlFor={answer} css={headingSecondary}>
            {answer}
          </label>
        </li>
      ))}
    </ul>
  );
}

InputRadio.propTypes = {
  optionalObjectWithStrictShape: PropTypes.exact({
    inputVal: PropTypes.string,
    question: PropTypes.object,
    handleChange: PropTypes.func
  })
};
