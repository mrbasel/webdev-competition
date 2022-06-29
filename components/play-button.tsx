import { TimerState } from "../hooks/useTimer";
import { BsPlay, BsPause } from "react-icons/bs";
import { IconBaseProps } from "react-icons/lib";

interface IPlayButton {
  buttonState: TimerState;
  onClick: () => void;
}

const iconProps: IconBaseProps = {
  size: 32,
};

export function PlayButton({ buttonState, onClick }: IPlayButton) {
  return (
    <button className="inline-block p-4 bg-[#7f5af0] rounded-full" onClick={onClick}>
      {buttonState === "on" ? (
        <BsPause {...iconProps}  />
      ) : (
        <BsPlay {...iconProps} />
      )}
    </button>
  );
}
