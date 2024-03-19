import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <h1>Shellendorf Antiques.</h1>
      <p>
        Preserving human artifacts from a time in history long before our own.
      </p>
      <Link to="/shop">Shop</Link>
    </div>
  );
}

export default Home;
