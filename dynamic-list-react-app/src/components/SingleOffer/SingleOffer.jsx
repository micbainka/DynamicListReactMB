export const ProductItem = (props) => {
  return (
    <div className="Offer-item">
      <span>Title: {props.title}</span>
      <span>Price: {props.price}&nbsp;EUR</span>
    </div>
  );
};