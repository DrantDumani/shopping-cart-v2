import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./Shop.module.css";

export const loader = async () => {
  const resp = await fetch("https://fakestoreapi.com/products?limit=12");
  if (!resp.ok) throw new Error("Unable to retrieve data");
  const data = resp.json();
  return data;
};

function Shop() {
  const inventory = useLoaderData();
  return (
    <div>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.grid}>
        {inventory.map((item) => (
          <Link className={styles.link} key={item.id} to={`/shop/${item.id}`}>
            <ItemCard
              key={item.id}
              name={item.title}
              imgLink={item.image}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
