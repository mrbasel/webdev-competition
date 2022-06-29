import { useState } from "react";
import { useTimer } from "../hooks/useTimer";
import { formatNumber } from "../utils/date";
import { PlayButton } from "./play-button";

export function Timer() {
  const [sessions, setSessions] = useState(1);
  const [isBreak, setIsBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(6);
  const [breakDuration, setBreakDuration] = useState(4);

  const sessionDuration = isBreak ? breakDuration : workDuration;

  const onSessionEnd = () => {
    if (!isBreak) {
      setSessions((count) => count + 1);
    }

    setIsBreak(!isBreak);
  };

  const {
    timerState,
    minutes,
    seconds,
    onStart,
    onPause,
    onResume,
    // onRestart,
  } = useTimer(sessionDuration, onSessionEnd);

  const toggleStartButton = () => {
    if (timerState === "off") onStart();
    else if (timerState === "on") onPause();
    else if (timerState === "paused") onResume();
  };

  return (
    <div className="text-white text-center">
      <p className="text-2xl ">{isBreak ? "Break time 😴" : `Session ${sessions}`}</p>
      <h2 className="text-8xl my-4">{`${formatNumber(minutes)}: ${formatNumber(
        seconds
      )}`}</h2>
      <div className="flex flex-col justify-center items-center gap-5 mt-6">
        <PlayButton buttonState={timerState} onClick={toggleStartButton} />

        {/* <button className="text-lg text-slate-400" onClick={onRestart}>
          Reset
        </button> */}
      </div>
    </div>
  );
}
