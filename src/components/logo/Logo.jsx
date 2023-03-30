/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Text from "../text";

const Logo = ({ children }) => (
  <div
    css={css`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    `}
  >
    <Text
      css={css`
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        vertical-align: middle;
        position: relative;
        left: -20px;
        margin: 0;
        padding: 0;
      `}
    >
      The
      <span
        role="img"
        aria-label="g clef"
        css={css`
          position: relative;
          bottom: -10px;
          font-size: 50px;
          margin: 0;
          padding: 0;
        `}
      >
        🎼
      </span>
      React
    </Text>
    <Text
      css={css`
        position: relative;
        top: -22px;
        left: 5px;
        font-weight: 600;
        margin: 0;
        padding: 0;
      `}
    >
      <span
        css={css`
          font-size: 70px;
          margin: 0;
          padding: 0;
        `}
      >
        M
      </span>
      <span
        css={css`
          font-size: 50px;
          font-stretch: ultra-condensed;
          margin: 0;
          padding: 0;
        `}
      >
        ULTiNOME
      </span>
    </Text>
  </div>
);

export default Logo;
