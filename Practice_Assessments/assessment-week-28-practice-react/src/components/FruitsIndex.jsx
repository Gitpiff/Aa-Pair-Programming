import { Link } from "react-router-dom";

function FruitsIndex({fruits}) {
  const fruitsArray = fruits.map(fruit => (
      
        <Link to={`/fruits/${fruit.id}`} key={fruit.id}>
          {fruit.name}
        </Link>
      
  ))

  // console.log(fruits[0].id)

  return (
    <>
      <h2>Fruits Index</h2>
      <nav>
        {fruitsArray}
      </nav>
    </>
  )
}

export default FruitsIndex;
