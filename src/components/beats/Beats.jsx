/** @jsxImportSource @emotion/react */
import { Fragment, useReducer } from "react";
import { css } from "@emotion/react";
import Title from "../title";

const Beats = ({ count = 8, onChange }) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action.checked && state.filter((value) => value === true).length > 2) {
      return state;
    }
    let newArray = [...state];
    newArray[action.index] = action.checked;
    return newArray;
  }, new Array(count).fill(false));

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
      `}
    >
      {state.map((beat, index) => (
        <Fragment key={`beat-${index}`}>
          <label
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 9px;
            `}
          >
            <Title
              css={css`
                font-size: 26px;
              `}
            >
              {index + 1}
            </Title>
            <input
              type="checkbox"
              name={`beat-${index}`}
              value={index}
              checked={beat}
              onChange={(e) =>
                dispatch({
                  index: parseInt(e?.currentTarget?.value, 10),
                  checked: e?.currentTarget?.checked
                })
              }
            />
          </label>
        </Fragment>
      ))}
    </div>
  );
};

export default Beats;
