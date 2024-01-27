import { useContext } from "react";
import { FavFruitContext } from '../context/FavFruitContext'
import { Link } from "react-router-dom";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useContext(FavFruitContext);
  const fruit = fruits.find(fruit => fruit.id === favFruitId)

  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${favFruitId}`}>
        {fruit.name}
      </Link>
    </>
  )
}

export default FavoriteFruit;
