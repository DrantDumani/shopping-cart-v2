import PropTypes from "prop-types";

function ItemCard({ name, imgLink, price }) {
  return (
    <div>
      <img src={imgLink} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  imgLink: PropTypes.string,
  price: PropTypes.number,
};

export default ItemCard;
