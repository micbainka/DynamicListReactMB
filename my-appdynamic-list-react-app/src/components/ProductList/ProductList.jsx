import offers from "../../Data/data.js";
import { ProductItem } from "../ProductItem/ProductItem.jsx";

export const ProductList = (props) => {
  return (
    <section >
      <h3>{props.sectionTitle}</h3>
           

      <ol class="Offer-item">
        {offers.map((item) => (
          <li>
            <ProductItem title={item.title} price={item.price} />
                      </li>
        ))}
      </ol>
    </section>
  );
};

