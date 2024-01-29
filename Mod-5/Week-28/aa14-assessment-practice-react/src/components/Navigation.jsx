import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/fruits/new">
          Enter a Fruit
        </NavLink>
        <NavLink to="/fav-fruit">
          Favorite Fruit
        </NavLink>
        <NavLink to="/set-fav-fruit">
          Set Favorite Fruit
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
