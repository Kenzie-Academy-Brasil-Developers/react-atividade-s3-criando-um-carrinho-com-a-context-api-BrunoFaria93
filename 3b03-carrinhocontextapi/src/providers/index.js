import { CatalogueProvider} from './catalogue/catalogue'
import { CartProvider } from './cart/cart'

const Providers = ({ children }) => {
    return(
        <CatalogueProvider>
            <CartProvider>{children}</CartProvider>
        </CatalogueProvider>
    )
}

export default Providers