import React from "react";
//import memesData from "./data.js";

export default function GeneratorSection() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  
  const [allMemes, setAllMemes] = React.useState([])
  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemes(data.data.memes))
  }, [])


  function getMeme() {
    const randomNumber  = Math.floor(Math.random() * allMemes.length); 
    let url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({...prevMeme,randomImage: url}))
  }
  
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
  }
  
  return (
    <div className="div--form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="top text in here"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="bottom text in here"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button type="button" className="form--button" onClick={getMeme}>
          Get new meme
        </button>
      </form>
      <div className="meme--container">
        <img src={meme.randomImage} alt="a meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
