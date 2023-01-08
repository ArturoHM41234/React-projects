import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function GameStadistics(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  let score = JSON.parse(localStorage.getItem ("gameStadistics")) || [];
  const [showScoreTable, setShowScoreTable] = useState(false);

  React.useEffect(() => {
    //count the time
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
    };

    //update the timer
    if (props.status) {
      setTimeout(() => {
        setTime(getTimeTimer());
      }, 10);
    }
  }, [time, props.status]);

  //reset the timer
  React.useEffect(() => {
    if (!props.tenzies) {
      setTime(() => ({ ms: 0, s: 0, m: 0, h: 0 }));
    } else {
      setShowScoreTable(true)
      //save the time and rolls to loca storage
      let stats = time;
      stats.rolls = props.rolls;
      score = [stats,...score ];
      localStorage.setItem('gameStadistics', JSON.stringify(score))
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


  const scoreElements = score.map(item => (
    <tr key={nanoid()}>
      <td>{item.h}:{item.m}:{item.s}:{item.ms}</td>
      <td>{item.rolls}</td>
    </tr>
  ));
  
  return (
    <div className="stadistics--container">
      <div className="timer">
        <CountTime />
      </div>
      <p className="counter roll--counter"># of rolls: {props.rolls}</p>
      <div className={showScoreTable ? "score-table--background-active" : "score-table--background-hide"}>
          <h1>Best Scores</h1> 
          <table className="score-table">
            <thead>
              <tr>
                <th>Time</th>
                <th># Rolls</th>
              </tr>
            </thead>
            <tbody>
              {scoreElements}
            </tbody>
          </table>
          <button 
          className="score-table--button"
          onClick={() => {setShowScoreTable(false)}}>Cerrar</button>
        </div>
    </div>
  );
}
