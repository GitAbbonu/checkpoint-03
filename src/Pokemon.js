import React, { useEffect } from "react";
import usePokeFetch from "./usePokeFetch";

function Pokemon({ name }) {
  const { pokemon, getPokemon, error, getMoreInfo, info } = usePokeFetch("");

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  //   useEffect(() => {
  //     getMoreInfo(pokemon.id);
  //   }, [pokemon]);

  const abilities = pokemon.abilities?.map((poke, index) => {
    return <li key={index}>{poke.ability.name}</li>;
  });

  const eggs = info.egg_groups?.map((info, index) => {
    return <li key={index}>{info.name}</li>;
  });

  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>{error && error}</h1>
        <h1>{pokemon.name}</h1>
        <h3>Exp: {pokemon.base_experience}</h3>
        <img src={pokemon.sprites?.front_default} alt="pokemon" />
        <ul>
          <h3>Abilities: </h3>
          {abilities}
        </ul>
        <button onClick={() => getMoreInfo(pokemon.id)}>More Info</button>
        <h3>Info:</h3>
        <h4>Color: {info.color?.name}</h4>
        <h4>Egg: </h4>
        <ul>{eggs}</ul>
        <h4>Happiness: {info.base_happiness}</h4>
      </div>
    </div>
  );
}

export default Pokemon;
