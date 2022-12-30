import React from "react";
import Dice from "./components/dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
    const [dices, setDices] = React.useState(getDicesNumber())
    const [tenzies, setTenzies] = React.useState(false)
    let action = tenzies ? "New Game" : "Roll";
    
    React.useEffect(() => {
	const allHeld = dices.every(dice => dice.isHeld === true);
	const firstValue = dices[0].value;
	const allSameValue = dices.every(dice => dice.value === firstValue)
	if (allSameValue && allHeld) {
	    setTenzies(true)
	    console.log("You won")
	}
    }, [dices]);
    
    function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getDicesNumber() {
	const number = [10];
	for(let i=0; i < 10; i++) {
	    const dice = {
		id: nanoid(),
		value: getRandomIntInclusive(1,6),
		isHeld: false
	    };
	    number[i] = dice;
	}
	return number;
    }

    function rollDices() {
	if(tenzies) {
	    setDices(oldDices => getDicesNumber())
	    setTenzies(false)
	} else {
	    setDices(oldDices => oldDices.map(dice => {
	    return dice.isHeld 
		? dice
		: {...dice, id: nanoid(), value: getRandomIntInclusive(1,6)}
	    } ))
	}
    }

    function holdDice(id) {
	setDices(oldDices => oldDices.map(dice => {
	    return dice.id === id
		?{...dice, isHeld: !dice.isHeld}
	    : dice
	})
		)
    }

    const diceElements =  dices.map(face => (
	<Dice
	    key = { face.id }
	    id = { face.id }
	    number={ face.value }
	    isHeld={ face.isHeld }
	    holdDice={ holdDice }
	/>
    ));

    
    return (
	<main>
	    { tenzies && <Confetti />}
	    <h1 className="title">Tenzies</h1>
	    <p className="instructions">Roll until all dice are the same. Click each die to freeze it
	    at its current value bettwen rolls.</p>
	    <div className="dice--container">
		{diceElements}
	    </div>
	    <button className="roll--button " onClick={rollDices}>{action}</button>
	</main>
    );
}
export default App;
