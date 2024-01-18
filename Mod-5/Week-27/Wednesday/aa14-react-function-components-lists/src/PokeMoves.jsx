import { moves } from './data';
import PokeMoveCard from './PokeMoveCard';

const pokeMoves = () => {
    return (
        <>
            <div></div>
            <h1>PokeMoves</h1>
            <ul>
                {moves.map(item => (
                    <PokeMoveCard key={item.id} {...item} />
                ))}
            </ul>
        </>
    )
};

export default pokeMoves;