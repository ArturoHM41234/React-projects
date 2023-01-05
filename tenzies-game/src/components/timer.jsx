import React from "react";

export default function Timer(props) {
  const [time, setTime] = React.useState({ ms: 0, s: 0, m: 0, h: 0 });

  React.useEffect(() => {
    const getTimeTimer = () => {
      let miliSeconds = time.ms,
        seconds = time.s,
        minutes = time.m,
        hours = time.h;
  
      if (miliSeconds === 100) {
        seconds++;
        miliSeconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      miliSeconds++;
      return { ms: miliSeconds, s: seconds, m: minutes, h: hours };
    }

    //
    if(props.status) {
       setTimeout(() => {
        setTime(getTimeTimer());
      }, 10);
    }
  }, [time, props.status]);

  //reset the timer
  React.useEffect(() => {
    if (!props.tenzies) {
      setTime(() => ({ms:0, s:0, m:0, h:0}))
    }
  }, [props.tenzies]);

  function CountTime() {
    return (
      <p>
        {time.h >= 10 ? time.h : "0" + time.h}:
        {time.m >= 10 ? time.m : "0" + time.m}:
        {time.s >= 10 ? time.s : "0" + time.s}:
        {time.ms >= 10 ? time.ms : "0" + time.ms}
      </p>
    );
  }
  return (
    <div className="timer">
      <CountTime />
    </div>
  );
}
