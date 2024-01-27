import { useParams } from "react-router-dom";

function FruitShow({fruits}) {

  const {fruitId} = useParams()

  const currentFruit = fruits.find(fruit => fruit.id === fruitId )
  return (
    <>
      <h2>{currentFruit.name}</h2>
      <h3>Color: {currentFruit.color}</h3>
      <h3>Sweetness: {currentFruit.sweetness}</h3>
      <h3>Seeds: {currentFruit.seeds}</h3>
    </>
  )
}

export default FruitShow;
