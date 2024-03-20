import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";

export const loader = async () => {
  const resp = await fetch("https://fakestoreapi.com/products?limit=12");
  if (!resp.ok) throw new Error("Unable to retrieve data");
  const data = resp.json();
  return data;
};

function Shop() {
  const inventory = useLoaderData();
  return (
    <>
      {inventory.map((item) => (
        <Link key={item.id} to={`/${item.id}`}>
          <ItemCard
            key={item.id}
            name={item.title}
            imgLink={item.image}
            price={item.price}
          />
        </Link>
      ))}
    </>
  );
}

export default Shop;
