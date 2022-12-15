import React from 'react';
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";


const cards = data.map( item => {
  return (
    <Card
      key = { item.id }
      item = { item }
    />
  )
})

function App() {
  return (
    <div>
      <Hero />
      <div className="carrousel">
        { cards }
      </div>
    </div>
  )
}

export default App;
