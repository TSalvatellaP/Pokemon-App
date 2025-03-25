import { useState, useEffect } from 'react';
import { Col } from 'antd';
import 'antd/dist/reset.css'; 
import './styles/App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from '../src/assets/logo.svg';
import getPokemon from '../src/api/getApi';

function App() {
  // Estado para almacenar los Pokémon
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemon();
      setPokemons(data); // Guardamos los datos en el estado
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
