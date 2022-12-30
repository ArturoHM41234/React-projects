import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map(square => ({
                ...square, on: square.id === id ? !square.on : square.on
            }));
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            handleClick={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
