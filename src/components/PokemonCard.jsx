import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import { StarOutlined } from '@ant-design/icons';


function PokemonCard({name}) {
  return (
   
<Card 
style={{width:250}}
title={name}
cover={<img 
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" 
  alt={name}/>}
extra={<StarOutlined/>}
>
    <Meta description="fire, magic" />

</Card>

  );
};

export default PokemonCard;