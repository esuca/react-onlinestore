import React, { useEffect, useState } from "react";
import { formatTime } from "./utils";

interface ICountdownProps {
  time: number;
}

const Countdown: React.FC<ICountdownProps> = props => {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevState => {
        const newTime = prevState - 1;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [props.time]);

  return (
    <div className={"countdown"}>
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default Countdown;
