import PropTypes from "prop-types";

function ItemAmount({ changeQuantity, amount }) {
  return (
    <div>
      <button onClick={() => changeQuantity(-1)}>-</button>
      <p>{amount}</p>
      <button onClick={() => changeQuantity(1)}>+</button>
    </div>
  );
}

ItemAmount.propTypes = {
  changeQuantity: PropTypes.func,
  amount: PropTypes.number,
};

export default ItemAmount;
