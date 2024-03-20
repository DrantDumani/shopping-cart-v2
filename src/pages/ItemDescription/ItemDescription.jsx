import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";
import ItemAmount from "../../components/ItemAmount/ItemAmount";
import CartModal from "../../components/CartModal/CartModal";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import useModal from "../../hooks/useModal";

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
  const { addToCart } = useOutletContext();
  const [showModal, setShowModal] = useModal();

  const changeQuantity = (num = 1) =>
    setQuantity((q) => {
      if (num < 0 && q === 1) return q;
      else return q + num;
    });

  const itemData = useLoaderData();
  const handleClick = () => {
    addToCart(itemData, quantity);
    setShowModal();
  };

  return (
    <div>
      <h1>{itemData.title}</h1>
      <img src={itemData.image} alt="" />
      <p>{itemData.description}</p>
      <p>{`$${itemData.price.toFixed(2)}`}</p>

      <ItemAmount amount={quantity} changeQuantity={changeQuantity} />
      <button onClick={handleClick}>Add to Cart</button>
      {showModal && (
        <ModalWrapper toggleModal={setShowModal}>
          <CartModal itemName={itemData.title} />
        </ModalWrapper>
      )}
    </div>
  );
}

export default ItemDescription;
