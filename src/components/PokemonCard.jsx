import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import '../styles/PokemonList.css';
import StarButton from './StarButton';



function PokemonCard({name, image, types}) {
const typesString = types.map(elem => elem.type.name).join(', ');

return (
 <Card 
style={{width:250}}
title={name}
cover={<img src={image} alt={name}/>} 
extra={<StarButton isFavorite />}
>
    <Meta description={typesString}/>

</Card>

  );
};

export default PokemonCard;