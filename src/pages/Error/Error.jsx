import { Link } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
  return (
    <>
      <h2 className={styles.error}>
        We&apos;re sorry. We were unable to find this item in our database.
        Click below to return to the shop.
      </h2>
      <Link className={styles.btn} to="/shop">
        Shop
      </Link>
    </>
  );
}

export default Error;
