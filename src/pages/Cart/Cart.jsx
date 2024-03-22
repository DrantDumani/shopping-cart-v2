import ItemAmount from "../../components/ItemAmount/ItemAmount";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, changeCartQuantity, removeItem } = useOutletContext();
  const priceTotal = cart.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );

  return (
    <>
      <h1 className={styles.title}>Your Cart</h1>
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
                <button
                  className={styles.remove}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p>Subtotal:</p>
          <p>${priceTotal.toFixed(2)}</p>
          <button className={styles.checkout}>Checkout</button>
        </div>
      ) : (
        <>
          <p>
            Your cart is empty! Click below to visit our shop and view our
            products!
          </p>
          <Link className={styles.shopBtn} to="/shop">
            Shop
          </Link>
        </>
      )}
    </>
  );
}

export default Cart;
