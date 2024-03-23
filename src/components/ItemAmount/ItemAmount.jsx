import PropTypes from "prop-types";
import styles from "./ItemAmount.module.css";

function ItemAmount({ changeQuantity, amount }) {
  return (
    <div className={styles.flex}>
      <button className={styles.btn} onClick={() => changeQuantity(-1)}>
        -
      </button>
      <p>{amount}</p>
      <button className={styles.btn} onClick={() => changeQuantity(1)}>
        +
      </button>
    </div>
  );
}

ItemAmount.propTypes = {
  changeQuantity: PropTypes.func,
  amount: PropTypes.number,
};

export default ItemAmount;
