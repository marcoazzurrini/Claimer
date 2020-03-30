/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../Styles/inputs";
import { headingPrimary } from "../Styles/text";

export default function Input({ props }) {
  const { question, handleChange, inputVal } = props;
  const inputRef = React.createRef();

  useEffect(() => inputRef.current.focus());
  return (
    <React.Fragment>
      <label htmlFor={question.id} css={headingPrimary}>
        {question.question}
      </label>
      <input
        ref={inputRef}
        css={TextInput}
        value={inputVal}
        onChange={e => handleChange(e.target.value)}
        type={question.type}
        id={question.id}
        required
      />
    </React.Fragment>
  );
}

Input.propTypes = {
  optionalObjectWithStrictShape: PropTypes.exact({
    inputVal: PropTypes.string,
    question: PropTypes.object,
    handleChange: PropTypes.func
  })
};
