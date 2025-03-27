import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import { StarOutlined } from '@ant-design/icons';


function PokemonCard({name, image, abilities}) {
  return (
   
<Card 
style={{width:250}}
title={name}
cover={<img src={image} alt={name}/>} 
extra={<StarOutlined/>}
>
    <Meta description={abilities} />

</Card>

  );
};

export default PokemonCard;