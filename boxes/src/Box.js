import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        color: props.on ? "white" : "#222222"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick= { () => {props.handleClick(props.id)} }
        >
            {props.id}
        </div>
    )
}