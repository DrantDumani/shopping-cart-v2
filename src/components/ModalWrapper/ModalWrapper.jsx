import PropTypes from "prop-types";

function ModalWrapper({ toggleModal, children }) {
  return (
    <div>
      <div>
        <button onClick={toggleModal}>X</button>
        {children}
      </div>
    </div>
  );
}

ModalWrapper.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.node,
};

export default ModalWrapper;
