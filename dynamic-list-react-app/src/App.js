import "./App.css";
import { ProductList } from "./components/OffersListing/OffersListing";

function App() {
  return (
    <div>
      <h1 className="App-header">Welcome to the shop!</h1>
      <ProductList sectionTitle={"Our Offer:"} />
    </div>
  );
}

export default App;
