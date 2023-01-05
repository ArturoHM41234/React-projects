import React from "react";
import Dice from "./components/dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Timer from "./components/timer";

let renderCounter = 0;

function App() {
  const [dices, setDices] = React.useState(getDicesNumber());
  const [tenzies, setTenzies] = React.useState(false); //true when the game is win
  const [rolls, setRolls] = React.useState(0);
  let action = tenzies ? "New Game" : "Roll";
  const [status, setStatus] = React.useState(false); //handle the start/stop of the timer
  //true = started
  //false = stopped

  //get the number for every dice
  function getDicesNumber() {
    const number = [10];
    for (let i = 0; i < 10; i++) {
      const dice = {
        id: nanoid(),
        value: getRandomIntInclusive(1, 6),
        isHeld: false,
      };
      number[i] = dice;
    }
    return number;
  }

  React.useEffect(() => {
    renderCounter += 1;
    if (!status && renderCounter > 1) {
      setStatus(true);
    }
    const allHeld = dices.every((dice) => dice.isHeld === true);
    const firstValue = dices[0].value;
    const allSameValue = dices.every((dice) => dice.value === firstValue);
    if (allSameValue && allHeld) {
      setTenzies(true);
      setStatus(false) //stops the timer
      renderCounter = 0;
    }
  }, [dices,status]);

  //get a random number between 1 and 6 inclusive
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //get new numbers for the rolled dices
  function rollDices() {
    if (tenzies) {
      //reset the game
      setDices(getDicesNumber());
      setTenzies(false);
      setRolls(0);
    } else {
      setDices((oldDices) =>
        oldDices.map((dice) => {
          return dice.isHeld
            ? dice
            : { ...dice, id: nanoid(), value: getRandomIntInclusive(1, 6) };
        })
      );
      setRolls((oldCount) => oldCount + 1);
    }
  }

  function holdDice(id) {
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  //create all ten dices at once
  const diceElements = dices.map((face) => (
    <Dice
      key={face.id}
      id={face.id}
      number={face.value}
      isHeld={face.isHeld}
      holdDice={holdDice}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value bettwen rolls.
      </p>
      <div className="dice--container">{diceElements}</div>
      <button
        className="roll--button "
        onClick={() => {
          rollDices();
        }}
      >
        {action}
      </button>
      <div className="stadistics--container">
        <Timer className="counter" status={status} tenzies={tenzies}/>
        <p className="counter roll--counter"># of rolls: {rolls}</p>
      </div>
    </main>
  );
}
export default App;
