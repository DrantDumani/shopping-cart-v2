import PropTypes from "prop-types";
import styles from "./ItemCard.module.css";

function ItemCard({ name, imgLink, price }) {
  return (
    <div>
      <img className={styles.cardImg} src={imgLink} alt="" />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  imgLink: PropTypes.string,
  price: PropTypes.number,
};

export default ItemCard;
