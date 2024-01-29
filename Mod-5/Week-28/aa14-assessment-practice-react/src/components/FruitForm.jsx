import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [ name, setName ] = useState("");
  const [ sweetness, setSweetness ] = useState(1);
  const [ color, setColor ] = useState("orange");
  const [ seeds, setSeeds ] = useState("yes");
  const [ errors, setErrors ] = useState({});

  
  useEffect(() => {
    const ValidationErrors = {}
    
    if(name.length < 3) {
      ValidationErrors.name = "Name must be 3 or more characters"
    }
    if(name.length > 20) {
      ValidationErrors.name = "Name must be 20 characters or less"
    }
    //find if the fruit name exists
    const currentFruit = fruits.find(fruit => fruit.name === name)
    if(currentFruit) {
      ValidationErrors.name = "Name already exists"
    }
    if(sweetness < 1 || sweetness > 10) {
      ValidationErrors.sweetness = "Sweetness must be between 1 and 10"
    }
    //set the errors state
    setErrors(ValidationErrors)
  }, [fruits, name, sweetness])

  return (
    <form
      className="fruit-form"
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="errors">{errors.name}</p>
      </label>
      <label>
        Select a Color
        <select
        value={color}
        onChange={(e) =>  setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <p className="errors">{errors.sweetness}</p>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
        />
        Seeds
      </label>
      <button
        type="submit"
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
