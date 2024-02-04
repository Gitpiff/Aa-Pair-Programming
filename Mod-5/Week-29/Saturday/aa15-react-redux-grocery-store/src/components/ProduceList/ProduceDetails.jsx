import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCount } from "../../store/cart";

function ProduceDetails({ produce }) {
  //Create dispatch
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart[produce.id]);

  const handleAdd = () => {
    //If item exists, increase count by 1
    if (cartItem) {
      dispatch(addToCount(produce.id))
    }
    //else add it to the cart
    else {
      dispatch(addToCart(produce.id))
    }
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleAdd}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
