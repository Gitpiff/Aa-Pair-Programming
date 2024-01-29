import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  const listOfFruits = fruits.map(fruit => {
    return (
      <Link to={`/fruits/${fruit.id}`} key={fruit.id}>
        {fruit.name}
      </Link>
    )
  })

  //console.log(listOfFruits)
  return (
    <div>
      <h2>Fruits Index</h2>
      <nav>
        {listOfFruits}
      </nav>
    </div>
  )
}

export default FruitsIndex;
