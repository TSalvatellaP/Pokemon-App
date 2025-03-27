import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import { StarOutlined } from '@ant-design/icons';


function PokemonCard({name, image}) {
  return (
   
<Card 
style={{width:250}}
title={name}
cover={<img src={image} alt={name}/>} 
extra={<StarOutlined/>}
>
    <Meta description='fire, magic '/>

</Card>

  );
};

export default PokemonCard;