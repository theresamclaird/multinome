/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Text = ({ children, ...props }) => (
  <p
    css={css`
      margin: 0;
      padding: 0;
    `}
    {...props}
  >
    {children}
  </p>
);

export default Text;
