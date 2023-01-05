import React from "react";
import { nanoid } from "nanoid";

export default function Dice(props) {
    const styles = {
	backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    };

	const Dots = () => {
		const dots = [];
		for (let i = 0; i < props.number; i++) {
			dots.push(<span key={ nanoid() } className="dot"></span>);
		}
		return (<div className="dots--container">{dots}</div>)
	}

    return (
	<div className="dice" style={ styles }
	     onClick={ () => {props.holdDice(props.id)} }>
		<Dots />
	</div>
    );
}
