import PropTypes from "prop-types";

function ItemAmount({ plusHandler, minusHandler, amount }) {
  return (
    <div>
      <button onClick={minusHandler}>-</button>
      <p>{amount}</p>
      <button onClick={plusHandler}>+</button>
    </div>
  );
}

ItemAmount.propTypes = {
  plusHandler: PropTypes.func,
  minusHandler: PropTypes.func,
  amount: PropTypes.number,
};

export default ItemAmount;
