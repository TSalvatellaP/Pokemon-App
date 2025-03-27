import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import { StarOutlined } from '@ant-design/icons';


function PokemonCard({name, image, types}) {
const typesString = types.map(elem => elem.type.name).join(', ');

return (
 <Card 
style={{width:250}}
title={name}
cover={<img src={image} alt={name}/>} 
extra={<StarOutlined/>}
>
    <Meta description={typesString}/>

</Card>

  );
};

export default PokemonCard;