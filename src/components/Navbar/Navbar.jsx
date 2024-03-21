import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

function Navbar({ amount }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItemBig}>
          <Link className={styles.linkBig} to="/">
            Shellendorf Antiques
          </Link>
        </li>
        <li className={styles.listItemSmall}>
          <ul className={styles.nestedList}>
            <li className={styles.nestedListItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className={styles.nestedListItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
                to="/cart"
              >
                Cart: {amount}
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  amount: PropTypes.number,
};

export default Navbar;
