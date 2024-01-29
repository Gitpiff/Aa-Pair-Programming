import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
  const { fruitId } = useParams()
  const currentFruit = fruits.find(fruit => fruit.id === fruitId)
  return (
    <div>
      <h2>{currentFruit.name}</h2>
      <h2>Color: {currentFruit.color}</h2>
      <h2>Seeds: {currentFruit.seeds}</h2>
      <h2>Sweetness: {currentFruit.sweetness}</h2>
    </div>
  )
}

export default FruitShow;
