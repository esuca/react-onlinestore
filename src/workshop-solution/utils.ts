export const formatTime = (time: number) => {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60);
  let minutesFormated =
    minutes.toString().length === 1 ? "0" + minutes : minutes;
  let secondsFormated =
    seconds.toString().length === 1 ? "0" + seconds : seconds;
  return minutesFormated + ":" + secondsFormated;
};
