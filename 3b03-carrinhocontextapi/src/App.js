import ProductList from './components/product-list'
import { CatalogueProvider } from './providers/catalogue/catalogue'  
import { CartProvider } from './providers/cart/cart'


function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type='catalogue' />
          <ProductList type='cart' />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
