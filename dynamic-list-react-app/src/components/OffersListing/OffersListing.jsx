import offers from "../../Data/data.js";
import { ProductItem } from "../SingleOffer/SingleOffer.jsx";

export const ProductList = (props) => {
  return (
    <section>
      <h3>{props.sectionTitle}</h3>
      <ol className="Offer-item">
        {offers.map((item) => (
          <li key={item.title}>
            <ProductItem title={item.title} price={item.price} />
          </li>
        ))}
      </ol>
    </section>
  );
};
