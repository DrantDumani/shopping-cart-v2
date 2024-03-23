import { useState, useEffect } from "react";

function useModal() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showModal]);

  return [showModal, toggleModal];
}

export default useModal;
