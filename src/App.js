/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
// import useSound from 'use-sound';
import Beats from "./components/beats";
import Speeds from "./components/speeds";
import Logo from "./components/logo";
import Title from "./components/title";

// import click from '../public/metronome80.wav';

export default function App() {
  const baseTempo = 19;
  const beats = 8;
  const speeds = 11;
  const [power, setPower] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [tempos, setTempos] = useState([]);

  // const [play] = useSound(click);

  useEffect(() => {
    const intervals = tempos.map((tempo) =>
      setInterval(() => {
        console.log("interval");
      }, tempo)
    );
    return () => intervals.map((interval) => clearInterval(interval));
  }, [tempos]);

  return (
    <div
      css={css`
        font-family: Arial, Helvetica, sans-serif;
        border: solid 50px #111;
        border-left: solid 66px #222;
        border-right: solid 66px #333;
        border-bottom-color: #444;
        border-radius: 20px;
        background-color: #000;
        color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <Logo />
        <Beats
          onChange={(selectedBeats) =>
            setTempos(
              selectedBeats.map((beat) => baseTempo + speed * (beat + 1))
            )
          }
        />
        <Title>Beats</Title>
      </div>
      <div
        css={css`
          flex: 1;
          align-self: flex-end;
        `}
      >
        <Title>Settings</Title>
        <Speeds
          baseTempo={baseTempo}
          beats={beats}
          speeds={speeds}
          selected={speed}
          onChange={setSpeed}
        />
        <Title>Speeds</Title>
      </div>
      <div
        css={css`
          align-self: flex-start;
        `}
      >
        <input
          type="checkbox"
          name="power"
          value={power}
          checked={power}
          onChange={(e) => setPower(e?.target?.checked)}
        />
      </div>
    </div>
  );
}
