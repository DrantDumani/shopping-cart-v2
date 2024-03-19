import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ amount }) {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <Link to="/">
            <h1>Shellendorf Antiques</h1>
          </Link>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart: {amount}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  amount: PropTypes.number,
};

export default Navbar;
