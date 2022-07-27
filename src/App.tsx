import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPokemons, Result } from './api';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Result[]>([]);

  useEffect(() => {
    getPokemons().then(pk => setPokemons(pk));
  }, []);

  return (
    <ul>
      {pokemons.map(p => <li key={p.name}>
        <Link to={'poke/' + p.name}>{p.name}</Link>
      </li>)}
    </ul>
  )
}

export default App;
