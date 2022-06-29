import { useTimer } from "../hooks/useTimer";
import { formatNumber } from "../utils/date";
import { PlayButton } from "./play-button";

export function Timer() {
  const {
    timerState,
    minutes,
    seconds,
    onStart,
    onPause,
    onResume,
    onRestart,
  } = useTimer(1);

  const toggleStartButton = () => {
    if (timerState === "off") onStart();
    else if (timerState === "on") onPause();
    else if (timerState === "paused") onResume();
  };

  return (
    <div className="text-white">
      <h2 className="text-8xl">{`${formatNumber(minutes)}: ${formatNumber(
        seconds
      )}`}</h2>
      <div className="flex flex-col justify-center items-center gap-5 mt-6">
        <PlayButton buttonState={timerState} onClick={toggleStartButton} />

        <button className="text-lg text-slate-400" onClick={onRestart}>
          Reset
        </button>
      </div>
    </div>
  );
}
