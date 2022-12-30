import React from 'react'

function Character() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        console.log("effect ran")
        fetch(`https://swapi.dev/api/people/${count}`).then(res => res.json()).then(data => setStarWarsData(data))
    }, [count])
    
    function handleClick() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={handleClick}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default Character