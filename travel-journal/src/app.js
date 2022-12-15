import React from 'react';
import Card from "./components/card";
import data from "./components/data";
import Header from "./components/headerbar";

const cards = data.map(item => {
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
      <Header />
      {cards}
    </div>
  )
}

export default App;
