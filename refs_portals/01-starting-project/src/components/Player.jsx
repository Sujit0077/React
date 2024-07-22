import { useState,useRef } from "react";

export default function Player() {
  const playerName=useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(event) {
  //   setSubmitted(false)
  //   setEnteredPlayerName(event.target.value)
  // }
  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value="";
  }
  // console.log("player")
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName? enteredPlayerName : 'Unknown Entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
