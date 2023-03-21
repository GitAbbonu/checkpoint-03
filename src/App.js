import React, { useState } from "react";
import Pokemon from "./Pokemon";

function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");

  const inputChangeHandler = (ev) => {
    setInput(ev.target.value);
  };

  return (
    <div>
      <div>
        <input value={input} onChange={inputChangeHandler} />
        <button onClick={() => setPokemon(input)}>Search</button>
        <button
          onClick={() => {
            setPokemon("");
            setInput("");
          }}
        >
          Reset
        </button>
        {pokemon !== "" && <Pokemon name={pokemon} />}
      </div>
    </div>
  );
}

export default App;
