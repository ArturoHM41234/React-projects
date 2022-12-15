import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardButtons } from "./modules/buttons";
import { Footer } from "./modules/footer";
import { CardInfo } from "./modules/cardinfo";
import { Photo } from "./modules/photo";
import "./styles/style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

function Card() {
  const card = (
    <div>
      <div className="card">
        <Photo/>
        <main className="suitor-data">
          <h1 className="suitor-data--Name">Arturo Hernandez Moreno</h1>
          <h2 className="suitor-data--Job">Frontend Developer</h2>
          <h3 className="suitor-data--Mail">arturoh2672@gmail.com</h3>
          <CardButtons/>
          <CardInfo/>
        </main>
        <Footer/>
      </div>
    </div>
  )
  return card;
}

root.render(<Card/>)
