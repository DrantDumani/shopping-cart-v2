import PropTypes from "prop-types";
import styles from "./ModalWrapper.module.css";

function ModalWrapper({ toggleModal, children }) {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.modal}>
        <button className={styles.btn} onClick={toggleModal}>
          X
        </button>
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
