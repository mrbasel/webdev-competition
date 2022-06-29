import { useTimer } from "../hooks/useTimer";
import { formatNumber } from "../utils/date";

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
      <div className="flex justify-center gap-10 mt-6">
        <button
          className="py-2 px-4 rounded-md bg-[#7f5af0] "
          onClick={toggleStartButton}
        >
          {timerState === "on" ? "Pause" : "Start"}
        </button>
        <button
          className="py-2 px-4 rounded-md bg-[#7f5af0] "
          onClick={onRestart}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
