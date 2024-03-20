import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";
import ItemAmount from "../../components/ItemAmount/ItemAmount";
import CartModal from "../../components/CartModal/CartModal";

export const loader = async ({ params }) => {
  const resp = await fetch(
    `https://fakestoreapi.com/products/${params.itemId}`
  );
  if (!resp.ok) throw new Error("Unable to retrieve data");
  const data = resp.json();
  return data;
};

function ItemDescription() {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useOutletContext();
  const incQuantity = () => setQuantity((q) => q + 1);
  const decQuantity = () =>
    setQuantity((q) => {
      if (q === 1) return q;
      return q - 1;
    });

  const itemData = useLoaderData();
  const handleClick = () => {
    addToCart(itemData, quantity);
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>{itemData.title}</h1>
      <img src={itemData.image} alt="" />
      <p>{itemData.description}</p>
      <p>{`$${itemData.price.toFixed(2)}`}</p>

      <ItemAmount
        amount={quantity}
        plusHandler={incQuantity}
        minusHandler={decQuantity}
      />
      <button onClick={handleClick}>Add to Cart</button>
      {showModal && (
        <CartModal
          toggleModal={() => setShowModal(false)}
          itemName={itemData.title}
        />
      )}
    </div>
  );
}

export default ItemDescription;
