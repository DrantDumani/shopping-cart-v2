import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Shellendorf Antiques</h1>
      <p>
        At Shellendorf Antiques, we make it our mission to preserve ancient
        artifacts from a time when beings known as humans roamed the land.
        Everything in our inventory has been carefully restored and preserved.
        Feel free to purchase a piece of history and take it back home with you.
        While you&apos;re at it, please visit our institute to view the human
        bones we have on display.
      </p>
      <Link to="/shop" className={styles.ctaBtn}>
        Shop
      </Link>
    </div>
  );
}

export default Home;
