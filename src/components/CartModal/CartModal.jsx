import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartModal({ itemName }) {
  return (
    <div>
      <p>{itemName} added to cart!</p>
      <Link to="/cart">Go to Cart</Link>
      <Link to="/shop">Continue Shopping</Link>
    </div>
  );
}

CartModal.propTypes = {
  itemName: PropTypes.string,
};

export default CartModal;
