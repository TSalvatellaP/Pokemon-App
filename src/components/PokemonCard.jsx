import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import { StarOutlined } from '@ant-design/icons';


function PokemonCard() {
  return (
   
<Card 
style={{width:250}}
title='Ditto'
cover={<img 
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" 
  alt="Dito"/>}
extra={<StarOutlined/>}
>
    <Meta description="fire, magic" />

</Card>

  );
};

export default PokemonCard;