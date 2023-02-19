import { useState, useEffect } from 'react'
import products from './constants/products.json'

import ProductTile from './ProductTile.js'
import CartModal from './CartModal.js'
import SearchBar from './SearchBar.js'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [renderCount, setRenderCount] = useState(24);
  const [renderedProducts, setRenderedProducts] = useState([])
  
  const [renderCart, setRenderCart] = useState(false)
  const [cart, setCart] = useState([])

  const [productQuery, setProductQuery] = useState('');

  useEffect(() => {
    setRenderedProducts(products.slice(0, renderCount))
  }, [])

  const addItemToCart = (product) => () => {
    setCart([...cart, product])
  }

  const hideCart = () => setRenderCart(false)

  const filterProducts = () => {
    console.log('filtering products...', {productQuery})
  }

  return (
    <div className="App">
      {renderCart ? (
        <CartModal
          cartItems={cart}
          handleClose={hideCart}
        />) : null}
      <Button onClick={() => setRenderCart(true)}>
        cart ({cart.length} items)
      </Button>
      <SearchBar
        updateQuery={setProductQuery}
        queryVal={productQuery}
        filterProducts={filterProducts}
      />
      {
        renderedProducts.map(productData => {
          return (
            <ProductTile
              productData={productData}
              addItemToCart={addItemToCart}
            />
          )
        })
      }
    </div>
  );
}

export default App;
