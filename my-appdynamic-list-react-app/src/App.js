
import "./App.css";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <div >
      <h1 class="App-header">Welcome to the shop!</h1>
      <ProductList sectionTitle={"Our Offer:"} />
      
    </div>
  );
}

export default App;
