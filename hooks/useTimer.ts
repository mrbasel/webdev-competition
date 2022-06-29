import { useState } from "react";
import { useTimer as useTime } from "react-timer-hook";
import { addMinutes } from "../utils/date";

export type TimerState = "on" | "off" | "paused";

export function useTimer(durationInMins: number) {
  const [timerState, setTimerState] = useState<TimerState>("off");

  const { minutes, seconds, isRunning, start, pause, restart, resume } =
    useTime({
      expiryTimestamp: addMinutes(new Date(), durationInMins),
      autoStart: false,
    });

  const onStart = () => {
    setTimerState("on");
    start();
  };
  const onPause = () => {
    setTimerState("paused");
    pause();
  };

  const onResume = () => {
    setTimerState("on");
    resume();
  };

  const onRestart = () => {
    setTimerState("off");
    restart(addMinutes(new Date(), durationInMins), false);
  };

  return {
    minutes,
    seconds,
    timerState,
    onStart,
    onPause,
    onResume,
    onRestart,
  };
}
