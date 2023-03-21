import React, { useState } from "react";
function usePokeFetch() {
  const [pokemon, setPokemon] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  async function getPokemon(pokeName) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokeName;

    try {
      const fet = await fetch(url);
      const obj = await fet.json();

      setPokemon(obj);
      console.log(obj);
    } catch (error) {
      setError("Pokemon non trovato: Premi RESET");
      console.log(error);
    }
  }

  async function getMoreInfo(id) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/" + id;

    try {
      const fet = await fetch(url);
      const info = await fet.json();

      setInfo(info);
      console.log(info);
    } catch (error) {}
  }

  return { pokemon, getPokemon, error, getMoreInfo, info };
}

export default usePokeFetch;
