import ItemAmount from "../../components/ItemAmount/ItemAmount";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link, useOutletContext } from "react-router-dom";

function Cart() {
  const { cart, changeCartQuantity, removeItem } = useOutletContext();
  const priceTotal = cart.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );

  return (
    <>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <div>
                <ItemCard
                  name={item.title}
                  imgLink={item.image}
                  price={item.price}
                />
                <ItemAmount
                  amount={item.quantity}
                  changeQuantity={(num) => changeCartQuantity(item.id, num)}
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
              <p>Subtotal:</p>
              <p>{priceTotal}</p>
              <button>Checkout</button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p>
            Your cart is empty! Click below to visit our shop and view our
            products!
          </p>
          <Link to="/shop">Shop</Link>
        </>
      )}
    </>
  );
}

export default Cart;
