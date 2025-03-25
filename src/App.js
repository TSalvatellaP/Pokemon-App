import { useState, useEffect } from 'react';
import { Col } from 'antd';
import 'antd/dist/reset.css'; 
import './styles/App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

function App() {
  // Estado para almacenar los Pokémon
  const [pokemons, setPokemons] = useState([]);

  // Simulación de carga de datos (puedes reemplazarlo con un fetch a una API)
  useEffect(() => {
    setPokemons([
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Charmander" },
      { id: 3, name: "Squirtle" },
    ]);
  }, []);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
    
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
