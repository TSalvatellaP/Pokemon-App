import {useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/reset.css'; 
import './styles/App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from '../src/assets/logo.svg';
import getPokemon from '../src/api/getApi';
import { connect } from 'react-redux';
import { setPokemons} from './actions/actions';

function App() {
const pokemons = useSelector(state => state.pokemons);
const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemon();
      dispatch(setPokemons(data)); 
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
