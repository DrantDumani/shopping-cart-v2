import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartModal.module.css";

function CartModal({ itemName }) {
  return (
    <div className={styles.flexWrapper}>
      <p>{itemName} added to cart!</p>
      <Link className={styles.btn} to="/cart">
        Go to Cart
      </Link>
      <Link className={styles.btn} to="/shop">
        Continue Shopping
      </Link>
    </div>
  );
}

CartModal.propTypes = {
  itemName: PropTypes.string,
};

export default CartModal;
