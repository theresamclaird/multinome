/** @jsxImportSource @emotion/react */
import { Fragment } from "react";
import { css } from "@emotion/react";
import Text from "../text";
import Title from "../title";

const Cell = ({ children, ...props }) => (
  <td
    css={css`
      text-align: center;
      padding: 2px 4px;
    `}
    {...props}
  >
    {children}
  </td>
);

const Speeds = ({
  baseTempo = 19,
  beats = 8,
  speeds = 11,
  selected = 2,
  onChange
}) => {
  const speedsTable = [];
  for (let rowIndex = beats - 1; rowIndex >= 0; rowIndex--) {
    const row = [];
    for (let columnIndex = 0; columnIndex < speeds; columnIndex++) {
      row.push((baseTempo + columnIndex) * (rowIndex + 1));
    }
    speedsTable.push(row);
  }

  return (
    <table
      css={css`
        margin-top: 10px;
      `}
    >
      <tbody>
        {speedsTable.map((row, index) => {
          return (
            <Fragment key={`speeds-table-${index}`}>
              <tr>
                <Cell
                  css={css`
                    padding-right: 10px;
                  `}
                >
                  <Title>{beats - index}</Title>
                </Cell>
                {row.map((column, columnIndex) => {
                  return (
                    <Fragment key={columnIndex}>
                      <Cell
                        css={css`
                          background-color: silver;
                          color: black;
                        `}
                      >
                        <Text>{column}</Text>
                      </Cell>
                    </Fragment>
                  );
                })}
              </tr>
            </Fragment>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          {speedsTable[0].map((tempo, index) => (
            <Fragment key={`speed-input-${index}`}>
              <Cell
                css={css`
                  padding-top: 10px;
                `}
              >
                <input
                  type="radio"
                  name="speeds"
                  value={index}
                  checked={parseInt(selected, 10) === index}
                  onChange={(e) =>
                    onChange(parseInt(e?.currentTarget?.value, 10))
                  }
                />
              </Cell>
            </Fragment>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

export default Speeds;
