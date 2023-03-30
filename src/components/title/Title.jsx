/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Text from "../text";

const Title = ({ children, ...props }) => (
  <Text
    css={css`
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 900;
      text-align: center;
      margin: 0;
      padding: 0;
    `}
    {...props}
  >
    {children}
  </Text>
);

export default Title;
