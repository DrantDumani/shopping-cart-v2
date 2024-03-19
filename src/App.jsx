import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const itemAmount = cart.reduce((total, el) => total + el.quantity, 0);
  const priceTotal = cart.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );

  const addToKart = (obj, num) => {
    const newItem = { ...obj, quantity: num };
    setCart((c) => c.concat(newItem));
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
        <Outlet />
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
