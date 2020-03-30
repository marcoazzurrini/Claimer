/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { bodyLarge, headingPrimary } from "../Styles/text";
export default function Result({ answers }) {
  const { 0: name, 1: email, 2: favSport, 3: fav, 4: signup } = answers;
  return (
    <div>
      <h1 css={headingPrimary}>Well done, {name.value}</h1>
      <p css={bodyLarge}>
        Your favourite {favSport.tag} is {favSport.value} and your favourite{" "}
        {fav.tag} is {fav.value}
      </p>
      <p css={bodyLarge}>
        {signup.value === "No"
          ? "We will not write you at"
          : "We will write you at "}
        {email.value}
      </p>
    </div>
  );
}

Result.propTypes = {
  answers: PropTypes.array.isRequired
};
