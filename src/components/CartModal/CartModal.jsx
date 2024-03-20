import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartModal({ toggleModal, itemName }) {
  return (
    <div>
      <div>
        <button onClick={toggleModal}>X</button>
        <p>{itemName} added to cart!</p>
        <Link to="/cart">Go to Cart</Link>
        <Link to="/shop">Continue Shopping</Link>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  toggleModal: PropTypes.func,
  itemName: PropTypes.string,
};

export default CartModal;
