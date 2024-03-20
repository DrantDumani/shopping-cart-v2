import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const itemAmount = cart.reduce((total, el) => total + el.quantity, 0);

  const addToCart = (obj, num) => {
    const newItem = { ...obj, quantity: num };
    setCart((c) => c.concat(newItem));
  };

  const changeCartQuantity = (id, num = 1) => {
    setCart((c) => {
      let newCart = [...c];
      const itemIndex = newCart.findIndex((item) => item.id === id);
      const targetItem = newCart[itemIndex];
      const newItem = { ...targetItem, quantity: targetItem.quantity + num };
      if (newItem.quantity === 0) newCart = newCart.filter((i) => i.id !== id);
      else newCart[itemIndex] = newItem;
      return newCart;
    });
  };

  const removeItem = (id) => {
    setCart((c) => c.filter((item) => item.id !== id));
  };
  return (
    <>
      <header className="header">
        <Navbar amount={itemAmount} />
      </header>

      <main className="main">
        <Outlet
          context={{
            addToCart,
            removeItem,
            changeCartQuantity,
            cart,
          }}
        />
      </main>

      <footer className="footer">
        <p>
          Created by Darnell. <a href="#">Github repo</a>
        </p>
        <p>Font and homepage image are property of Nintendo.</p>
        <p>
          Built using React Router and{" "}
          <a href="https://fakestoreapi.com/">Fakestore API</a>
        </p>
      </footer>
    </>
  );
}

export default App;
