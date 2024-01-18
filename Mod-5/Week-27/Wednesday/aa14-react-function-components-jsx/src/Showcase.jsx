import Bulbasaur from './images/bulbasaur.jpg' 
import '../src/Showcase.css'

function Showcase() {
    const favPokemon = "Bulbasaur";

    const pokeCharacteristics = {
        type: "Grass",
        move: "Vine Whip"
    };

    return (
      <div>
        <h1>{favPokemon}&apos;s Showcase Component</h1>
        <img src={Bulbasaur} alt='Bulbasaur' />
        <h2>
            Bulbasauru's type is <span className='type'>{pokeCharacteristics.type}</span> and one of their moves is <span className='move'>{pokeCharacteristics.move}</span>
        </h2>
      </div>
    );
  }
  
  export default Showcase;