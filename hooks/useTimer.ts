import { useCallback, useEffect, useState } from "react";
import { useTimer as useTime } from "react-timer-hook";
import { addMinutes, addSeconds } from "../utils/date";

export type TimerState = "on" | "off" | "paused";

export function useTimer(durationInMins: number, onExpire: () => void) {
  const [timerState, setTimerState] = useState<TimerState>("off");

  const { minutes, seconds, isRunning, start, pause, restart, resume } =
    useTime({
      expiryTimestamp: addSeconds(new Date(), durationInMins),
      autoStart: false,
      onExpire: () => {
        onRestart();
        onExpire();
      },
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

  const onRestart = useCallback(() => {
    setTimerState("off");
    restart(addSeconds(new Date(), durationInMins), false);
  }, [durationInMins, restart]);

  const setDuration = (duration: number) => {
    setTimerState("off");
    restart(addSeconds(new Date(), duration), false);
  };

  return {
    minutes,
    seconds,
    timerState,
    onStart,
    onPause,
    onResume,
    onRestart,
    setDuration,
  };
}
