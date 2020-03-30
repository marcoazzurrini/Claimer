/** @jsx jsx */
import { jsx } from "@emotion/core";
import { theme } from "../Styles/theme";
import { messageStyles } from "../Styles/buttons";

export default function Message({ children }) {
  return (
    <div css={messageStyles} style={{ backgroundColor: theme.colors.primary }}>
      {children}
    </div>
  );
}
