import { useState } from "react";

function useModal() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return [showModal, toggleModal];
}

export default useModal;
