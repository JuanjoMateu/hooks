import React from 'react';
import useHookURL from './hooks/useFecthCharacters';

import './App.css';

function App() {
  const urlPokemon = useHookURL('https://pokeapi.co/api/v2/pokemon/1');
  const urlRick = useHookURL('https://rickandmortyapi.com/api/character/1');
  
  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {urlPokemon && (
        <>
          <p>{urlPokemon.name}</p>
          <img src={urlPokemon.sprites.front_default} alt={urlPokemon.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {urlRick && (
        <>
          <p>{urlRick.name}</p>
          <img src={urlRick.image} alt={urlRick.name} />
        </>
      )}
    </div>
  );
};
export default App;
